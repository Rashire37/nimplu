import type { ClientEventsMap } from "./ClientEvent.js";
import type Plugin from "./Plugin.js";

export interface ClientFunctions {
    setText(id: number, text: string, color: string, loc: [number, number], font: number): void 
    say(text: string): void
    pressKey(key: number, time: number): void 
    openWindow(owner: Plugin, name: string, indexPath: string, size: [number, number], resizable: boolean): void
    sendToWindow(owner: Plugin, name: string, channel: string, data: any[]): void
}
class Client {
    private _plugins: Plugin[] = [];
    private _clientFunctions: ClientFunctions
    constructor(clientFunctions: ClientFunctions) {
        this._clientFunctions = clientFunctions;
    }
    add(plugin: Plugin): void {
        this._plugins.push(plugin)
    }
    dispatch<T extends keyof ClientEventsMap>(ev: T, data: ClientEventsMap[T]) {
        for (const plugin of this._plugins) {
            for (const feature of plugin.features()) {
                for (const event of feature.events(ev)){
                    event.call(this._clientFunctions, data, plugin)
                }
            }
        }
    }
}

export default Client;