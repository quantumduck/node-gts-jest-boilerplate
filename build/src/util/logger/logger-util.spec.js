"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_util_1 = require("./logger-util");
const logger_interface_1 = require("./logger.interface");
const util_1 = require("../../../test/util");
const util_2 = require("../../../test/util");
describe('LoggerUtil', () => {
    const target = logger_util_1.LoggerUtil;
    const testMessage = 'msg';
    const testError = TypeError('bad type');
    const testData = { data: {} };
    describe('createLogEntry', () => {
        it('should include the timestamp at the start', () => {
            const before = Date.now();
            const result = target.createLogEntry(logger_interface_1.LogLevel.INFO, testMessage);
            const after = Date.now();
            const timestamp = result.split(' ')[0];
            util_2.expectDate(timestamp).toBeBetween(before, after);
        });
        it('should include the message at the end if no other data provided', () => {
            const result = target.createLogEntry(logger_interface_1.LogLevel.INFO, testMessage);
            util_2.expectString(result).toEndWith(testMessage);
        });
        it('should include the message if additional data provided', () => {
            const result = target.createLogEntry(logger_interface_1.LogLevel.INFO, testMessage, testData);
            util_2.expectString(result).toContain(testMessage);
        });
        it('should include the log level if additional data provided', () => {
            const result = target.createLogEntry(logger_interface_1.LogLevel.WARN, testMessage, testData);
            util_2.expectString(result).toContain(logger_interface_1.LOG_LEVEL_STRINGS[logger_interface_1.LogLevel.WARN]);
        });
        it('should include end with the strigified data object, if provided', () => {
            const result = target.createLogEntry(logger_interface_1.LogLevel.INFO, testMessage, testData);
            util_2.expectString(result).toEndWith(JSON.stringify(testData));
        });
        it('should end with the error stack if provided', () => {
            const result = target.createLogEntry(logger_interface_1.LogLevel.INFO, testMessage, testError);
            if (testError.stack) {
                util_2.expectString(result).toEndWith(testError.stack);
            }
        });
    });
    describe('getCurrentLogLevelFromEnv', () => {
        const envEditor = new util_1.EnvironmentEditor();
        const logLevelKey = 'LOG_LEVEL';
        const defaultLevel = logger_interface_1.LogLevel.INFO;
        afterEach(() => {
            envEditor.resetAll();
        });
        it('should return the default logging level if the env variable is unset', () => {
            envEditor.clear(logLevelKey);
            expect(target.getCurrentLogLevelFromEnv(defaultLevel)).toBe(defaultLevel);
        });
        it('should return all the valid log levels accorind to their defined order', () => {
            logger_interface_1.LOG_LEVEL_STRINGS.forEach((logLevelString, index) => {
                envEditor.set(logLevelKey, logLevelString);
                expect(target.getCurrentLogLevelFromEnv(defaultLevel)).toBe(index);
            });
            envEditor.clear(logLevelKey);
            expect(target.getCurrentLogLevelFromEnv(defaultLevel)).toBe(defaultLevel);
        });
    });
});
//# sourceMappingURL=logger-util.spec.js.map