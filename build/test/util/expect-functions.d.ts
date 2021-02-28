export declare function expectDate(time: string | number | Date): {
    toBeBefore: (afterTime: string | number | Date) => boolean;
    toBeAfter: (beforeTime: string | number | Date) => boolean;
    toBeBetween: (beforeTime: string | number | Date, afterTime: string | number | Date) => boolean;
};
export declare function expectString(str: string): {
    toStartWith: (substring: string) => boolean;
    toContain: (substring: string) => boolean;
    toEndWith: (substring: string) => boolean;
    toMatchRegex: (regex: RegExp) => boolean;
};
