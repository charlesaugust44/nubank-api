import BillSummary from "./BillSummary";
import Href from "./Href";

export default interface BillSummaryContainer {
    bills: [BillSummary],
    _links: {
        future: Href,
        open: Href
    }
}