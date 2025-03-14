class Plugin {
    _features = [];
    author;
    name;
    constructor(data) {
        this.author = data.author;
        this.name = data.name;
    }
    registerFeature(feature) {
        this._features.push(feature);
    }
    log() {
        console.log(`${this.author}/${this.name}`);
    }
    features() {
        return this._features;
    }
    listFeatures() {
        let res = {};
        for (const feature of this._features) {
            res[feature.id] = feature;
        }
        return res;
    }
}
export default Plugin;
