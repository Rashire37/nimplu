import type { ClientEventsMap } from "./ClientEvent.js";
import type Plugin from "./Plugin.js";

export interface ClientFunctions {
    setText(id: number, text: string, color: string, loc: [number, number], font: number): void 
    say(text: string): void
    pressKey(key: number, time: number): void 
    openWindow(owner: Plugin, name: string, indexPath: string, size: [number, number], resizable: boolean): void
    sendToWindow(owner: Plugin, name: string, channel: string, data: any[]): void
    // setState(owner: Plugin, content: string): void
    // getState(owner: Plugin): string
}
class Client {
    private _plugins: {
        [key: `@${string}/${string}`]: Plugin
    } = {};
    private _clientFunctions: ClientFunctions
    constructor(clientFunctions: ClientFunctions) {
        this._clientFunctions = clientFunctions;
    }
    add(plugin: Plugin): void {
        plugin._setClient(this._clientFunctions)
        this._plugins[`@${plugin.author}/${plugin.name}`] = plugin
        for (const event of plugin.events("pluginLoad")){
            event.call(plugin, {})
        }
    }
    dispatchCustomWindowMessage(id: keyof typeof this._plugins, channel: string, data: any[]){
        const plugin = this._plugins[id]
        for (const event of plugin.events("customWindowMessage")){
            event.call(plugin, {
                channel,
                data
            })
        }
    }
    dispatch<T extends keyof ClientEventsMap>(ev: T, data: ClientEventsMap[T]) {
        for (const plugin of Object.values(this._plugins)) {
            for (const event of plugin.events(ev)){
                event.call(plugin, data)
            }
        }
    }
}

export default Client;