import Href from "./Href";
import Summary from "./Summary";

export default interface BillSummary {
    state: string,
    summary: Summary,
    _links: {
        self: Href,
        barcode?: Href,
        boleto_email?: Href
    }
}