import type { ClientFunctions } from "./Client.js";
import { ClientEvent, ClientEventsMap } from "./ClientEvent.js";

class Plugin {
    private _events: ClientEvent<any>[] = [];
    author: string;
    name: string;
    constructor(data: {
        author: string;
        name: string;
    }) {
        this.author = data.author;
        this.name = data.name;
    }
    log() {
        console.log(`${this.author}/${this.name}`);
    }
    
    on<T extends keyof ClientEventsMap>(event: T, callback: (this: ClientFunctions, ev: ClientEventsMap[T], owner: Plugin) => void) {
        this._events.push(new ClientEvent(event, callback))
    }
    
    events<T extends keyof ClientEventsMap>(ev:T): ClientEvent<T>[]{
        return this._events.filter(event=>event.event===ev);
    }
}

export default Plugin;