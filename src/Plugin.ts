import type { ClientFunctions } from "./Client.js";
import { ClientEvent, ClientEventsMap } from "./ClientEvent.js";

interface PluginState {
    [key: string]: any
}
class Plugin {
    private _events: ClientEvent<any>[] = [];
    private _state: PluginState = {};
    private _hasLoadedState: boolean = false;
    author: string;
    name: string;
    client?: ClientFunctions
    constructor(data: {
        author: string;
        name: string;
    }) {
        this.author = data.author;
        this.name = data.name;
    }
    _setClient(c: ClientFunctions) {
        this.client = c;
    }
    log() {
        console.log(`${this.author}/${this.name}`);
    }
    openWindow(name: string, indexPath: string, size: [number, number], resizable: boolean){
        this.client!.openWindow(this, name, indexPath, size, resizable)
        return {
            send: (channel: string, data: any[])=>{
                this.client!.sendToWindow(this, name, channel, data)
            }
        }
    }
    setState(key: string, value: any){
        this._state[key] = value
        let state = JSON.stringify(this._state)
        this.client!.setState(this, state)
    }
    async getState(key: string){
        if (!this._hasLoadedState){
            let response = await this.client!.getState(this)
            this._state = JSON.parse(response)
            this._hasLoadedState = true
        }
        return this._state[key]
    }
    
    on<T extends keyof ClientEventsMap>(event: T, callback: (this: Plugin, ev: ClientEventsMap[T]) => void) {
        this._events.push(new ClientEvent(event, callback))
    }
    
    events<T extends keyof ClientEventsMap>(ev:T): ClientEvent<T>[]{
        return this._events.filter(event=>event.event===ev);
    }
}

export default Plugin;