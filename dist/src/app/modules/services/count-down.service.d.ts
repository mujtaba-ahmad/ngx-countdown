export interface ICountdownOptions {
    theme?: string;
    format?: string;
    onStart?: Function;
    onComplete?: Function;
}
export interface ICountdownData {
    timeInterval: number;
    theme: string;
    format: string;
    object: any;
    onStart: Function;
    onComplete: Function;
}
export declare class CountDownService {
    static THEMES: Array<string>;
    private uniquecountdown;
    private countDownOptions;
    constructor();
    setCoundownOptions(options: ICountdownOptions): void;
    getdefaultCountDownOptions(): ICountdownOptions;
    dhms(s: any, f: any): any;
}
