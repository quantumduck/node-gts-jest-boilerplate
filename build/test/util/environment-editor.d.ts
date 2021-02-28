export declare class EnvironmentEditor {
    private readonly envCopy;
    private readonly envKeys;
    get(key: string): string | undefined;
    set(key: string, value: string): void;
    clear(key: string): void;
    resetAll(): void;
    reset(key: string): void;
    private storeOriginalValue;
}
