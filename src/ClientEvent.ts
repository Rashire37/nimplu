import type { ClientFunctions } from "./Client.js"

interface ClientEventsMap {
    "speak": {
        text: string
    }
    "textCreate": {
        color: string
        text: string
        font: number
        loc: [number, number]
        id: number
    }
    "keyPress": {
        key: number
        action: number
        pressedKeys: number[]
    }
    "hintSet": {
        color: string
        text: string
        font: number
        loc: [number, number]
        id: 3
    }
    "statusSet": {
        color: string
        text: string
        font: number
        loc: [number, number]
        id: 65001
    }
}

class ClientEvent<T extends keyof ClientEventsMap> {
    constructor(public event: T, private _callback: (this: ClientFunctions, ev: ClientEventsMap[T]) => void) { }
    call(data: ClientFunctions, ev: ClientEventsMap[T]) {
        this._callback.bind(data)(ev)
    }
}

export { ClientEvent, ClientEventsMap };