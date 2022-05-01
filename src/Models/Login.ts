import Href from "./Href";

export default interface Login {
    access_token: string,
    token_type: string,
    '_links': {
        revoke_token: Href ,
        revoke_all: Href,
        account_emergency: Href,
        bill_emergency: Href
    },
    refresh_token: string,
    refresh_before: string
};