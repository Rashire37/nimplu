import type { ClientFunctions } from "./Client.js";
import { ClientEvent, ClientEventsMap } from "./ClientEvent.js";
declare class Feature {
    id: string;
    private _events;
    constructor(data: {
        id: string;
    });
    on<T extends keyof ClientEventsMap>(event: T, callback: (this: ClientFunctions, ev: ClientEventsMap[T]) => void): void;
    events<T extends keyof ClientEventsMap>(ev: T): ClientEvent<T>[];
}
export default Feature;
//# sourceMappingURL=Feature.d.ts.map