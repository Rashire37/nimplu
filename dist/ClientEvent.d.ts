import type Plugin from "./Plugin.js";
interface ClientEventsMap {
    "pluginLoad": {};
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
    "customWindowMessage": {
        channel: string;
        data: any[];
    };
}
declare class ClientEvent<T extends keyof ClientEventsMap> {
    event: T;
    private _callback;
    constructor(event: T, _callback: (this: Plugin, ev: ClientEventsMap[T]) => void);
    call(data: Plugin, ev: ClientEventsMap[T]): void;
}
export { ClientEvent, ClientEventsMap };
