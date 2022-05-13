import Href from "./Href";
import {EventItem} from "./EventItem";

export default interface Events {
    events: [EventItem],
    customer_id: string,
    as_of: string,
    _links: {
        updates: Href
    }
}