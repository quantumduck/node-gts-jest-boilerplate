"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOG_LEVEL_DICTIONARY = exports.LOG_LEVEL_STRINGS = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["EMERG"] = 0] = "EMERG";
    LogLevel[LogLevel["ALERT"] = 1] = "ALERT";
    LogLevel[LogLevel["CRIT"] = 2] = "CRIT";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
    LogLevel[LogLevel["WARN"] = 4] = "WARN";
    LogLevel[LogLevel["NOTICE"] = 5] = "NOTICE";
    LogLevel[LogLevel["INFO"] = 6] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 7] = "DEBUG";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
exports.LOG_LEVEL_STRINGS = [
    'EMERGENCY',
    'ALERT',
    'CRITICAL',
    'ERROR',
    'WARN',
    'NOTICE',
    'INFO',
    'DEBUG',
];
exports.LOG_LEVEL_DICTIONARY = {
    EMERG: LogLevel.EMERG,
    EMERGENCY: LogLevel.EMERG,
    ALERT: LogLevel.ALERT,
    CRIT: LogLevel.CRIT,
    CRITICAL: LogLevel.CRIT,
    ERR: LogLevel.ERROR,
    ERROR: LogLevel.ERROR,
    WARN: LogLevel.WARN,
    WARNING: LogLevel.WARN,
    NOTICE: LogLevel.NOTICE,
    INFO: LogLevel.INFO,
    INFORMATION: LogLevel.INFO,
    INFORMATIONAL: LogLevel.INFO,
    DEBUG: LogLevel.DEBUG,
};
//# sourceMappingURL=logger.interface.js.map