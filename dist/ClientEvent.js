class ClientEvent {
    event;
    _callback;
    constructor(event, _callback) {
        this.event = event;
        this._callback = _callback;
    }
    call(data, ev, owner) {
        this._callback.bind(data)(ev, owner);
    }
}
export { ClientEvent };
