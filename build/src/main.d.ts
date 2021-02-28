import { ApplicationDependencies } from './main.models';
export declare class Main {
    private readonly logger;
    constructor(dependencies?: ApplicationDependencies);
    runOnce(): Promise<void>;
}
