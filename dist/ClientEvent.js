class ClientEvent {
    event;
    _callback;
    constructor(event, _callback) {
        this.event = event;
        this._callback = _callback;
    }
    call(data, ev) {
        this._callback.bind(data)(ev);
    }
}
export { ClientEvent };
//# sourceMappingURL=ClientEvent.js.map