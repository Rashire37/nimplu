class ClientEvent {
    event;
    _callback;
    constructor(event, _callback) {
        this.event = event;
        this._callback = _callback;
    }
<<<<<<< HEAD
    call(data, ev, owner) {
        this._callback.bind(data)(ev, owner);
=======
    call(data, ev) {
        this._callback.bind(data)(ev);
>>>>>>> d437deae8d16ce7815df3cb2d7c8b873a29c569f
    }
}
export { ClientEvent };
//# sourceMappingURL=ClientEvent.js.map