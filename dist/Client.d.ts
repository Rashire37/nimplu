import type { ClientEventsMap } from "./ClientEvent.js";
import type Plugin from "./Plugin.js";
export interface ClientFunctions {
    setText(id: number, text: string, color: string, loc: [number, number], font: number): void;
    say(text: string): void;
    pressKey(key: number, time: number): void;
    openWindow(owner: Plugin, name: string, indexPath: string, size: [number, number], resizable: boolean): void;
    sendToWindow(owner: Plugin, name: string, channel: string, data: any[]): void;
}
declare class Client {
    private _plugins;
    private _clientFunctions;
    constructor(clientFunctions: ClientFunctions);
    add(plugin: Plugin): void;
    dispatch<T extends keyof ClientEventsMap>(ev: T, data: ClientEventsMap[T]): void;
}
export default Client;
