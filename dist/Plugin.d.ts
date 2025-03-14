import type { ClientFunctions } from "./Client.js";
import { ClientEvent, ClientEventsMap } from "./ClientEvent.js";
declare class Plugin {
    private _events;
    author: string;
    name: string;
    constructor(data: {
        author: string;
        name: string;
    });
    log(): void;
    on<T extends keyof ClientEventsMap>(event: T, callback: (this: ClientFunctions, ev: ClientEventsMap[T], owner: Plugin) => void): void;
    events<T extends keyof ClientEventsMap>(ev: T): ClientEvent<T>[];
}
export default Plugin;
