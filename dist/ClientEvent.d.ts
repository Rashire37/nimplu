import type { ClientFunctions } from "./Client.js";
<<<<<<< HEAD
import type Plugin from "./Plugin.js";
=======
>>>>>>> d437deae8d16ce7815df3cb2d7c8b873a29c569f
interface ClientEventsMap {
    "speak": {
        text: string;
    };
    "textCreate": {
        color: string;
        text: string;
        font: number;
        loc: [number, number];
        id: number;
    };
    "keyPress": {
        key: number;
        action: number;
        pressedKeys: number[];
    };
    "hintSet": {
        color: string;
        text: string;
        font: number;
        loc: [number, number];
        id: 3;
    };
    "statusSet": {
        color: string;
        text: string;
        font: number;
        loc: [number, number];
        id: 65001;
    };
}
declare class ClientEvent<T extends keyof ClientEventsMap> {
    event: T;
    private _callback;
<<<<<<< HEAD
    constructor(event: T, _callback: (this: ClientFunctions, ev: ClientEventsMap[T], owner: Plugin) => void);
    call(data: ClientFunctions, ev: ClientEventsMap[T], owner: Plugin): void;
=======
    constructor(event: T, _callback: (this: ClientFunctions, ev: ClientEventsMap[T]) => void);
    call(data: ClientFunctions, ev: ClientEventsMap[T]): void;
>>>>>>> d437deae8d16ce7815df3cb2d7c8b873a29c569f
}
export { ClientEvent, ClientEventsMap };
//# sourceMappingURL=ClientEvent.d.ts.map