import Feature from "./Feature.js";
declare class Plugin {
    private _features;
    author: string;
    name: string;
    constructor(data: {
        author: string;
        name: string;
    });
    registerFeature(feature: Feature): void;
    log(): void;
    features(): Feature[];
    listFeatures(): {
        [key: string]: Feature;
    };
}
export default Plugin;
//# sourceMappingURL=Plugin.d.ts.map