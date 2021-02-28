"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const util_1 = require("./util");
const application = new _1.Main();
const logger = new util_1.ConsoleLogger();
application
    .runOnce()
    .then(() => {
    logger.notice('Done');
})
    .catch(e => {
    logger.error('Something went wrong', e);
});
//# sourceMappingURL=run.js.map