"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const util_1 = require("./util");
class Main {
    constructor(dependencies = {}) {
        this.logger = dependencies.logger || new util_1.ConsoleLogger();
    }
    runOnce() {
        this.logger.notice('Started');
        return Promise.resolve();
    }
}
exports.Main = Main;
//# sourceMappingURL=main.js.map