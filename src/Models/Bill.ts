import Summary from "./Summary";
import Href from "./Href";
import BillItem from "./BillItem";

export default interface Bill {
    id: string,
    state: string,
    summary: Summary,
    _links: {
        boleto_email: Href,
        barcode: Href,
        invoice_email: Href,
        self: Href
    },
    line_items: [BillItem]
}