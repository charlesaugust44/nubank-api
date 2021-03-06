import {Nubank, NubankStatus} from '../index'

async function login() {
    await Nubank.login('CPF', 'PASSWORD');//TODO: Add Credentials before testing
    await Nubank.printQRCode();

    expect(Nubank.status).toBe(NubankStatus.WAITING_QR);

    for (let tries = 0; tries < 15; tries++) {
        await new Promise(r => setTimeout(r, 1000));

        try {
            await Nubank.lift();
            break;
        } catch (e: any) {
            if (e.response && e.response.status !== 404) {
                console.error(e.message);
                expect(Nubank.status).toBe(NubankStatus.UNAUTHORIZED);
                return;
            }
        }
    }
}

beforeAll(async () => {
    expect(Nubank.status).toBe(NubankStatus.UNAUTHORIZED);

    if (!Nubank.loadData()) {
        await login();
        Nubank.storeData();
    }

    expect(Nubank.status).toBe(NubankStatus.AUTHORIZED);
}, 30000);

afterAll(async () => {
    expect(Nubank.status).toBe(NubankStatus.AUTHORIZED);

    await Nubank.logout();

    expect(Nubank.status).toBe(NubankStatus.UNAUTHORIZED);
})

test('Fetch open bill', async () => {
    expect(Nubank.status).toBe(NubankStatus.AUTHORIZED);

    let billsSummary = await Nubank.fetchBillsSummary();
    let bill = await Nubank.fetchBill(billsSummary[0]);

    expect(bill.state).toBe('open');
}, 30000);

test('Fetch all events', async () => {
    expect(Nubank.status).toBe(NubankStatus.AUTHORIZED);

    let events = await Nubank.fetchEvents();

    expect(events.length).toBeGreaterThan(2000);
}, 30000);