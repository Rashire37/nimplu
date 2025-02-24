import Feature from "./Feature.js";

class Plugin {
    private _features: Feature[] = [];
    author: string;
    name: string;
    constructor(data: {
        author: string;
        name: string;
    }) {
        this.author = data.author;
        this.name = data.name;
    }
    registerFeature(feature: Feature) {
        this._features.push(feature)
    }
    log() {
        console.log(`${this.author}/${this.name}`);
    }
    features(){
        return this._features;
    }
    listFeatures(): { [key: string]: Feature } {
        let res: { [key: string]: Feature } = {};
        for (const feature of this._features) {
            res[feature.id] = feature
        }
        return res;
    }
}

export default Plugin;