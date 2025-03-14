class Client {
    _plugins = {};
    _clientFunctions;
    constructor(clientFunctions) {
        this._clientFunctions = clientFunctions;
    }
    add(plugin) {
        plugin._setClient(this._clientFunctions);
        this._plugins[`@${plugin.author}/${plugin.name}`] = plugin;
        for (const event of plugin.events("pluginLoad")) {
            event.call(plugin, {});
        }
    }
    dispatchCustomWindowMessage(id, channel, data) {
        const plugin = this._plugins[id];
        for (const event of plugin.events("customWindowMessage")) {
            event.call(plugin, {
                channel,
                data
            });
        }
    }
    dispatch(ev, data) {
        for (const plugin of Object.values(this._plugins)) {
            for (const event of plugin.events(ev)) {
                event.call(plugin, data);
            }
        }
    }
}
export default Client;
