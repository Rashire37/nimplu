import { ClientEvent } from "./ClientEvent.js";
class Plugin {
    _events = [];
    // private _state: PluginState = {};
    // private _hasLoadedState: boolean = false;
    author;
    name;
    client;
    constructor(data) {
        this.author = data.author;
        this.name = data.name;
    }
    _setClient(c) {
        this.client = c;
    }
    log() {
        console.log(`${this.author}/${this.name}`);
    }
    openWindow(name, indexPath, size, resizable) {
        this.client.openWindow(this, name, indexPath, size, resizable);
        return {
            send: (channel, data) => {
                this.client.sendToWindow(this, name, channel, data);
            }
        };
    }
    // setState(key: string, value: any){
    //     this._state[key] = value
    //     let state = JSON.stringify(this._state)
    //     this.client!.setState(this, state)
    // }
    // async getState(key: string){
    //     if (!this._hasLoadedState){
    //         let response = await this.client!.getState(this)
    //         this._state = JSON.parse(response)
    //         this._hasLoadedState = true
    //     }
    //     return this._state[key]
    // }
    on(event, callback) {
        this._events.push(new ClientEvent(event, callback));
    }
    events(ev) {
        return this._events.filter(event => event.event === ev);
    }
}
export default Plugin;
