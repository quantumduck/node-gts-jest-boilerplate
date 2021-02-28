"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentEditor = void 0;
class EnvironmentEditor {
    constructor() {
        this.envCopy = {};
        this.envKeys = {};
    }
    get(key) {
        return process.env[key];
    }
    set(key, value) {
        this.storeOriginalValue(key);
        process.env[key] = value;
    }
    clear(key) {
        this.storeOriginalValue(key);
        delete process.env[key];
    }
    resetAll() {
        Object.keys(this.envKeys).forEach(k => {
            this.reset(k);
        });
    }
    reset(key) {
        if (this.envCopy[key] != null) {
            process.env[key] = this.envCopy[key];
            delete this.envCopy[key];
        }
        else {
            delete process.env[key];
        }
        delete this.envKeys[key];
    }
    storeOriginalValue(key) {
        if (!this.envKeys[key]) {
            this.envKeys[key] = true;
            if (process.env[key] != null) {
                this.envCopy[key] = process.env[key] || '';
            }
        }
    }
}
exports.EnvironmentEditor = EnvironmentEditor;
//# sourceMappingURL=environment-editor.js.map