"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectString = exports.expectDate = void 0;
function getTimestamp(time) {
    if (typeof time === 'number') {
        return time;
    }
    return new Date(time).getTime();
}
function customExpectCondition(isSuccessful, failureMessage) {
    if (!isSuccessful) {
        fail(failureMessage);
    }
    return true;
}
function expectDate(time) {
    const toBeBefore = (afterTime) => customExpectCondition(getTimestamp(time) <= getTimestamp(afterTime), `Expected ${time} to be on or before ${afterTime}`);
    const toBeAfter = (beforeTime) => customExpectCondition(getTimestamp(time) >= getTimestamp(beforeTime), `Expected ${time} to be on or after ${beforeTime}`);
    const toBeBetween = (beforeTime, afterTime) => customExpectCondition(toBeBefore(afterTime) && toBeAfter(beforeTime), `Expected ${time} to be between ${beforeTime} and ${afterTime}`);
    return { toBeBefore, toBeAfter, toBeBetween };
}
exports.expectDate = expectDate;
function expectString(str) {
    return {
        toStartWith: (substring) => customExpectCondition(str.indexOf(substring) === 0, `Expected '${str}' to start with '${substring}'`),
        toContain: (substring) => customExpectCondition(str.indexOf(substring) >= 0, `Expected '${str}' to start contain '${substring}'`),
        toEndWith: (substring) => customExpectCondition(str.lastIndexOf(substring) === str.length - substring.length, `Expected '${str}' to end with '${substring}'`),
        toMatchRegex: (regex) => customExpectCondition(!!str.match(regex), `Expected '${str}' to match ${regex}`),
    };
}
exports.expectString = expectString;
//# sourceMappingURL=expect-functions.js.map