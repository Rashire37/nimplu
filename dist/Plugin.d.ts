import type { ClientFunctions } from "./Client.js";
import { ClientEvent, ClientEventsMap } from "./ClientEvent.js";
declare class Plugin {
    private _events;
    private _state;
    private _hasLoadedState;
    author: string;
    name: string;
    client?: ClientFunctions;
    constructor(data: {
        author: string;
        name: string;
    });
    _setClient(c: ClientFunctions): void;
    log(): void;
    openWindow(name: string, indexPath: string, size: [number, number], resizable: boolean): {
        send: (channel: string, data: any[]) => void;
    };
    setState(key: string, value: any): void;
    getState(key: string): Promise<any>;
    on<T extends keyof ClientEventsMap>(event: T, callback: (this: Plugin, ev: ClientEventsMap[T]) => void): void;
    events<T extends keyof ClientEventsMap>(ev: T): ClientEvent<T>[];
}
export default Plugin;
