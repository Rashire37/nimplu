import { ClientEvent } from "./ClientEvent.js";
class Feature {
    id;
    _events = [];
    constructor(data) {
        this.id = data.id;
    }
    on(event, callback) {
        this._events.push(new ClientEvent(event, callback));
    }
    events(ev) {
        return this._events.filter(event => event.event === ev);
    }
}
export default Feature;
//# sourceMappingURL=Feature.js.map