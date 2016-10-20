import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { CounterService, counterData, counterOptions } from './counter.service';

@Component({
    moduleId: module.id,
    selector: 'countdown',
    templateUrl: './counter.component.html'
})

export class CounterComponent implements OnInit, OnChanges {
    private format: string;
	@Input() time: number;
    @Output() onStart = new EventEmitter<counterData>();
    @Output() onComplete = new EventEmitter<counterData>();
    private finishTime: number;
    private timer: any;
	private theme: string;
    private subscription: Subscription;
    private countdown: counterData;
    private date: string;
    constructor(private _counterService: CounterService) {
        
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
        let counterOptions: counterOptions;
        counterOptions = this._counterService.getCountdwnOptions();
        console.log(this.time);
        console.log(counterOptions)
        this.countdown = {
            timeInterval    : this.time,
            format  : counterOptions.format,
            theme    : counterOptions.theme + '-countdown-timer',
            onStart    : counterOptions.onStart && this.isFunction(counterOptions.onStart) ? counterOptions.onStart : null,
            onComplete : counterOptions.onComplete && this.isFunction(counterOptions.onComplete) ? counterOptions.onComplete : null
        };
        this.onStart.emit(this.countdown);
        if (counterOptions.onStart && this.isFunction(counterOptions.onStart)) {
            counterOptions.onStart.call(this, this.countdown);
        }
        this.finishTime = this.countdown.timeInterval;
        var that = this;
         this.timer = setInterval(function() {
                            if (that.finishTime == 0) {
                                if (counterOptions.onComplete && that.isFunction(counterOptions.onComplete)) {
                                    counterOptions.onComplete.call(that, that.countdown);
                                }
                                that.onComplete.emit(that.countdown);
                                clearInterval(that.timer);
                            }
                            else {
                                that.finishTime = that.finishTime - 1;
                                that.date = that._counterService.dhms(that.finishTime, that.countdown.format);
                            }
                         }, 1000)
    }
}
