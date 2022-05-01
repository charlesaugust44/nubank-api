import axios from "axios";
import routes from "./discoveryRoutes";
import Discovery from "./Models/Discovery";
import AppDiscovery from "./Models/AppDiscovery";
import Login from "./Models/Login";
import Lift from "./Models/Lift";
import BillSummary from "./Models/BillSummary";
import Bill from "./Models/Bill";
import BillSummaryContainer from "./Models/BillSummaryContainer";
import BillContainer from "./Models/BillContainer";

const QRCode = require("qrcode");

const REQUEST_HEADER = {
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
    Accept: 'application/json, text/plain, */*',
    Origin: 'https://app.nubank.com.br',
    Host: 'prod-global-webapp-proxy.nubank.com.br',
    Connection: 'keep-alive'
}

export enum NubankStatus {
    AUTHORIZED,
    UNAUTHORIZED,
    WAITING_QR
}

export class Nubank {

    public static status: NubankStatus = NubankStatus.UNAUTHORIZED;

    private static clientSecret: string = "yQPeLzoHuJzlMMSAjC-LgNUJdUecx8XO";

    private static discoveryRoutes: Discovery;
    private static appDiscoveryRoutes: AppDiscovery;
    private static loginResponse: Login;
    private static liftResponse: Lift;
    private static sessionId: string;

    private static discovery(): Promise<any> {
        let discoveryRequest = axios.get<Discovery>(routes.discovery, {headers: REQUEST_HEADER});
        let appDiscoveryRequest = axios.get<AppDiscovery>(routes.appDiscovery, {headers: REQUEST_HEADER})

        return Promise.all([discoveryRequest, appDiscoveryRequest]).then(response => {
            Nubank.discoveryRoutes = response[0].data;
            Nubank.appDiscoveryRoutes = response[1].data;
        });
    }

    static login(cpf: string, password: string): Promise<Login> {
        return new Promise((resolve, reject) => {
                Nubank.discovery().then(() => {
                    let data = {
                        grant_type: "password",
                        login: cpf,
                        password: password,
                        client_id: "other.conta",
                        client_secret: Nubank.clientSecret
                    };

                    axios.post<Login>(Nubank.discoveryRoutes.login, data, {headers: REQUEST_HEADER})
                        .then(response => {
                            Nubank.loginResponse = response.data;
                            Nubank.status = NubankStatus.WAITING_QR;
                            resolve(response.data);
                        })
                        .catch(error => {
                            Nubank.status = NubankStatus.UNAUTHORIZED;
                            reject(error);
                        })
                });
            }
        );
    }

    static logout(): Promise<any> {
        return axios.post(Nubank.loginResponse._links.revoke_token.href, {}, Nubank.getRequestConfig())
            .then(() => {
                Nubank.status = NubankStatus.UNAUTHORIZED;
            });
    }

    static lift(): Promise<Lift> {
        return new Promise((resolve, reject) => {
            if (Nubank.status !== NubankStatus.WAITING_QR) {
                reject({message: "Login needs to be done before trying to lift the QRCode!"});
            }

            let data = {
                qr_code_id: Nubank.sessionId,
                type: "login-webapp"
            };

            axios.post<Lift>(Nubank.appDiscoveryRoutes.lift, data, Nubank.getRequestConfig(true))
                .then(response => {
                    Nubank.liftResponse = response.data;
                    Nubank.status = NubankStatus.AUTHORIZED;
                    resolve(response.data);
                })
                .catch(err => {
                    reject(err);
                });
        })
    }

    static fetchBillsSummary(): Promise<[BillSummary]> {
        return new Promise((resolve, reject) => {
            axios.get<BillSummaryContainer>(Nubank.liftResponse._links.bills_summary.href, Nubank.getRequestConfig())
                .then((response => {
                    resolve(response.data.bills);
                }))
                .catch(error => {
                    reject(error);
                });
        });
    }

    static fetchBill(billFragment: BillSummary): Promise<Bill> {
        return new Promise((resolve, reject) => {
            axios.get<BillContainer>(billFragment._links.self.href, Nubank.getRequestConfig())
                .then((response => {
                    resolve(response.data.bill);
                }))
                .catch(error => {
                    reject(error);
                });
        });
    }

    static getQRCodeImage(): Promise<any> {
        Nubank.sessionId = Nubank.generateSSID();
        return new Promise((resolve, reject) => {
            QRCode.toDataURL(Nubank.sessionId, {errorCorrectionLevel: 'H'}, (err: Error, url: string) => {
                if (err) reject(err);
                if (url) resolve(url);
            })
        });
    }

    static printQRCode(): Promise<any> {
        Nubank.sessionId = Nubank.generateSSID();

        return new Promise((resolve, reject) => {
            QRCode.toString(Nubank.sessionId, {
                type: 'terminal'
            }, function (err: Error, url: string) {
                if (err) reject(err);
                if (url) resolve(url);

                console.log("\n" + url);
            })
        });
    }

    private static getRequestConfig(useLoginToken: boolean = false): object {
        let token = useLoginToken ? Nubank.loginResponse.access_token : Nubank.liftResponse.access_token;
        return {
            headers: {
                ...REQUEST_HEADER,
                Authorization: "Bearer " + token
            }
        }
    }

    private static generateSSID(): string {
        const crypto = require('crypto').webcrypto;

        let rand = function () {
            if (crypto.getRandomValues) {
                let arr = new Uint8Array(1);
                crypto.getRandomValues(arr);

                return (arr[0] % 16).toString(16);
            }

            return (16 * Math.random() | 0).toString(16);
        }

        return "xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx".replace(/x/g, rand);
    }

}