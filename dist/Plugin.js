import { ClientEvent } from "./ClientEvent.js";
class Plugin {
    _events = [];
    author;
    name;
    constructor(data) {
        this.author = data.author;
        this.name = data.name;
    }
    log() {
        console.log(`${this.author}/${this.name}`);
    }
    on(event, callback) {
        this._events.push(new ClientEvent(event, callback));
    }
    events(ev) {
        return this._events.filter(event => event.event === ev);
    }
}
export default Plugin;
