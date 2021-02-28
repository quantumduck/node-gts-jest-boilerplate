import { LogLevel } from './logger.interface';
export declare class LoggerUtil {
    static createLogEntry(logLevel: LogLevel, message: string, data?: any): string;
    static stringifyDataOrError(data: any): string | undefined;
    static isError(data: any): boolean;
    static stringifyLogLevel(logLevel: LogLevel): string;
    static getCurrentLogLevelFromEnv(defaultLevel: LogLevel): LogLevel;
}
