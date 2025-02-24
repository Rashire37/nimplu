import type { ClientEventsMap } from "./ClientEvent.js";
import type Plugin from "./Plugin.js";
export interface ClientFunctions {
    setText(id: number, text: string, color: string, loc: [number, number], font: number): void;
    say(text: string): void;
    pressKey(key: number, time: number): void;
<<<<<<< HEAD
    openWindow(owner: Plugin, name: string, size: [number, number], resizable: boolean): void;
    sendToWindow(owner: Plugin, name: string, channel: string, data: any[]): void;
=======
    openWindow(name: string, size: [number, number], resizable: boolean): void;
    sendToWindow(name: string, channel: string, data: any[]): void;
>>>>>>> d437deae8d16ce7815df3cb2d7c8b873a29c569f
}
declare class Client {
    private _plugins;
    private _clientFunctions;
    constructor(clientFunctions: ClientFunctions);
    add(plugin: Plugin): void;
    dispatch<T extends keyof ClientEventsMap>(ev: T, data: ClientEventsMap[T]): void;
}
export default Client;
//# sourceMappingURL=Client.d.ts.map