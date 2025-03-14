class Client {
    _plugins = [];
    _clientFunctions;
    constructor(clientFunctions) {
        this._clientFunctions = clientFunctions;
    }
    add(plugin) {
        this._plugins.push(plugin);
    }
    dispatch(ev, data) {
        for (const plugin of this._plugins) {
            for (const event of plugin.events(ev)) {
                event.call(this._clientFunctions, data, plugin);
            }
        }
    }
}
export default Client;
