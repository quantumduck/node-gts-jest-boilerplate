"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
const __1 = require("..");
const logger_util_1 = require("../logger-util");
// tslint:disable: no-any
class ConsoleLogger {
    constructor(logLevel = __1.LogLevel.INFO, customLoggingInterface) {
        this.logLevel = logLevel;
        this.console = customLoggingInterface || {
            error: console.error,
            warn: console.warn,
            log: console.log,
            info: console.info,
            debug: console.debug,
        };
    }
    emergency(message, data) {
        const logEntry = logger_util_1.LoggerUtil.createLogEntry(__1.LogLevel.EMERG, message, data);
        this.console.error(logEntry);
    }
    alert(message, data) {
        if (this.isLoggable(__1.LogLevel.ALERT)) {
            const logEntry = logger_util_1.LoggerUtil.createLogEntry(__1.LogLevel.ALERT, message, data);
            this.console.error(logEntry);
        }
    }
    critical(message, data) {
        if (this.isLoggable(__1.LogLevel.CRIT)) {
            const logEntry = logger_util_1.LoggerUtil.createLogEntry(__1.LogLevel.CRIT, message, data);
            this.console.error(logEntry);
        }
    }
    error(message, data) {
        if (this.isLoggable(__1.LogLevel.ERROR)) {
            const logEntry = logger_util_1.LoggerUtil.createLogEntry(__1.LogLevel.ERROR, message, data);
            this.console.error(logEntry);
        }
    }
    warning(message, data) {
        if (this.isLoggable(__1.LogLevel.WARN)) {
            const logEntry = logger_util_1.LoggerUtil.createLogEntry(__1.LogLevel.WARN, message, data);
            this.console.warn(logEntry);
        }
    }
    notice(message, data) {
        if (this.isLoggable(__1.LogLevel.NOTICE)) {
            const logEntry = logger_util_1.LoggerUtil.createLogEntry(__1.LogLevel.NOTICE, message, data);
            this.console.log(logEntry);
        }
    }
    info(message, data) {
        if (this.isLoggable(__1.LogLevel.INFO)) {
            const logEntry = logger_util_1.LoggerUtil.createLogEntry(__1.LogLevel.INFO, message, data);
            this.console.info(logEntry);
        }
    }
    debug(message, data) {
        if (this.isLoggable(__1.LogLevel.DEBUG)) {
            const logEntry = logger_util_1.LoggerUtil.createLogEntry(__1.LogLevel.DEBUG, message, data);
            this.console.debug(logEntry);
        }
    }
    isLoggable(logLevel) {
        return logLevel <= this.logLevel;
    }
}
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=console-logger.js.map