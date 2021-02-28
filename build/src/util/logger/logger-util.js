"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerUtil = void 0;
const logger_interface_1 = require("./logger.interface");
// tslint:disable: no-any
class LoggerUtil {
    static createLogEntry(logLevel, message, data) {
        const messageLine = `${new Date().toISOString()} [${this.stringifyLogLevel(logLevel)}] ${message}`;
        if (data === undefined) {
            return messageLine;
        }
        else {
            return `${messageLine}\n${this.stringifyDataOrError(data)}`;
        }
    }
    static stringifyDataOrError(data) {
        return this.isError(data) ? data.stack : `Data: ${JSON.stringify(data)}`;
    }
    static isError(data) {
        return data && typeof data.stack === 'string';
    }
    static stringifyLogLevel(logLevel) {
        return logger_interface_1.LOG_LEVEL_STRINGS[logLevel];
    }
    static getCurrentLogLevelFromEnv(defaultLevel) {
        return process.env.LOG_LEVEL
            ? logger_interface_1.LOG_LEVEL_DICTIONARY[process.env.LOG_LEVEL.toUpperCase()]
            : defaultLevel;
    }
}
exports.LoggerUtil = LoggerUtil;
//# sourceMappingURL=logger-util.js.map