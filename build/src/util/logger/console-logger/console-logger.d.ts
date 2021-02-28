import { Logger, LogLevel } from '..';
import { ConsoleLoggingInterface } from './console-logger.models';
export declare class ConsoleLogger implements Logger {
    logLevel: LogLevel;
    private readonly console;
    constructor(logLevel?: LogLevel, customLoggingInterface?: ConsoleLoggingInterface);
    emergency(message: string, data?: any): void;
    alert(message: string, data?: any): void;
    critical(message: string, data?: any): void;
    error(message: string, data?: any): void;
    warning(message: string, data?: any): void;
    notice(message: string, data?: any): void;
    info(message: string, data?: any): void;
    debug(message: string, data?: any): void;
    private isLoggable;
}
