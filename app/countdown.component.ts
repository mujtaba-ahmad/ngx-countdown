import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

import { CountdownService, countdownData, countdownOptions } from './countdown.service';

@Component({
    moduleId: module.id,
    selector: 'countdown',
    templateUrl: './countdown.component.html'
})

export class CountdownComponent implements OnInit, OnChanges {
    private format: string;
	@Input() time: number;
    @Output() onStart = new EventEmitter<countdownData>();
    @Output() onComplete = new EventEmitter<countdownData>();
    @Input() object: any;
    private finishTime: number;
    private timer: any;
	private theme: string;
    private countdown: countdownData;
    private date: string;
    constructor(private _countdownService: CountdownService) {
        
    }
    ngOnInit() {
        this.startCountDown()
        
    }
    ngOnChanges() {
        //this.startCountDown()
    }
    isFunction(obj: any) {
        return typeof obj === "function";
    }
    startCountDown () {
        let countdownOptions: countdownOptions;
        countdownOptions = this._countdownService.getCountdwnOptions();
        console.log(this.time);
        console.log(countdownOptions)
        this.countdown = {
            timeInterval    : this.time,
            object: this.object,
            format  : countdownOptions.format,
            theme    : countdownOptions.theme + '-countdown-timer',
            onStart    : countdownOptions.onStart && this.isFunction(countdownOptions.onStart) ? countdownOptions.onStart : null,
            onComplete : countdownOptions.onComplete && this.isFunction(countdownOptions.onComplete) ? countdownOptions.onComplete : null
        };
        this.onStart.emit(this.countdown);
        if (countdownOptions.onStart && this.isFunction(countdownOptions.onStart)) {
            countdownOptions.onStart.call(this, this.countdown);
        }
        this.finishTime = this.countdown.timeInterval;
        var that = this;
         this.timer = setInterval(function() {
                            if (that.finishTime == 0) {
                                if (countdownOptions.onComplete && that.isFunction(countdownOptions.onComplete)) {
                                    countdownOptions.onComplete.call(that, that.countdown);
                                }
                                that.onComplete.emit(that.countdown);
                                clearInterval(that.timer);
                            }
                            else {
                                that.finishTime = that.finishTime - 1;
                                that.date = that._countdownService.dhms(that.finishTime, that.countdown.format);
                            }
                         }, 1000)
    }
}
