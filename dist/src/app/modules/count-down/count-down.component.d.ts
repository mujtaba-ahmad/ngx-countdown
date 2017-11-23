import { OnInit, EventEmitter } from '@angular/core';
import { CountDownService, ICountdownData } from '../services/count-down.service';
export declare class CountDownComponent implements OnInit {
    private _countDownService;
    private format;
    private finishTime;
    private timer;
    private theme;
    countdown: ICountdownData;
    date: string;
    time: number;
    onStart: EventEmitter<string>;
    onComplete: EventEmitter<string>;
    object: any;
    singleFormat: string;
    selectedtheme: string;
    constructor(_countDownService: CountDownService);
    ngOnInit(): void;
    isFunction(data: any): boolean;
    startCountDown(): void;
}
