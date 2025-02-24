import type { ClientFunctions } from "./Client.js";
import { ClientEvent, ClientEventsMap } from "./ClientEvent.js";



class Feature {
    id: string;
    private _events: ClientEvent<any>[] = []
    constructor(data: {
        id: string
    }) {
        this.id = data.id
    }
    on<T extends keyof ClientEventsMap>(event: T, callback: (this: ClientFunctions, ev: ClientEventsMap[T]) => void) {
        this._events.push(new ClientEvent(event, callback))
    }
    events<T extends keyof ClientEventsMap>(ev:T): ClientEvent<T>[]{
        return this._events.filter(event=>event.event===ev);
    }
}

export default Feature;