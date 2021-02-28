import { Dictionary } from '../interfaces';
export interface Logger {
    emergency: LogFunction;
    alert: LogFunction;
    critical: LogFunction;
    error: LogFunction;
    warning: LogFunction;
    notice: LogFunction;
    info: LogFunction;
    debug: LogFunction;
}
export declare type LogFunction = (message: string, data?: any) => void;
export declare enum LogLevel {
    EMERG = 0,
    ALERT = 1,
    CRIT = 2,
    ERROR = 3,
    WARN = 4,
    NOTICE = 5,
    INFO = 6,
    DEBUG = 7
}
export declare const LOG_LEVEL_STRINGS: string[];
export declare const LOG_LEVEL_DICTIONARY: Dictionary<LogLevel>;
