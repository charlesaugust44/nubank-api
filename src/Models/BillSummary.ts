import Href from "./Href";
import Summary from "./Summary";

export default interface BillSummary {
    id?: string,
    state: string,
    summary: Summary,
    _links: {
        self: Href,
        barcode?: Href,
        boleto_email?: Href
    }
}