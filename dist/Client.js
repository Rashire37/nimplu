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
            for (const feature of plugin.features()) {
                for (const event of feature.events(ev)) {
<<<<<<< HEAD
                    event.call(this._clientFunctions, data, plugin);
=======
                    event.call(this._clientFunctions, data);
>>>>>>> d437deae8d16ce7815df3cb2d7c8b873a29c569f
                }
            }
        }
    }
}
export default Client;
//# sourceMappingURL=Client.js.map