import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CountDownService } from '../services/count-down.service';
export class CountDownComponent {
    /**
     * @param {?} _countDownService
     */
    constructor(_countDownService) {
        this._countDownService = _countDownService;
        this.date = " - ";
        this.onStart = new EventEmitter();
        this.onComplete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.startCountDown();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    isFunction(data) {
        return typeof data === "function";
    }
    /**
     * @return {?}
     */
    startCountDown() {
        let /** @type {?} */ countdownOptions;
        countdownOptions = this._countDownService.getdefaultCountDownOptions();
        this.countdown = {
            timeInterval: this.time,
            object: this.object,
            format: this.singleFormat || countdownOptions.format,
            theme: countdownOptions.theme + '-countdown-timer',
            onStart: countdownOptions.onStart && this.isFunction(countdownOptions.onStart) ? countdownOptions.onStart : null,
            onComplete: countdownOptions.onComplete && this.isFunction(countdownOptions.onComplete) ? countdownOptions.onComplete : null
        };
        this.onStart.emit(JSON.stringify(this.countdown));
        if (countdownOptions.onStart && this.isFunction(countdownOptions.onStart)) {
            countdownOptions.onStart.call(this, this.countdown);
        }
        this.finishTime = this.countdown.timeInterval;
        var /** @type {?} */ that = this;
        this.timer = setInterval(function () {
            if (that.finishTime == 0) {
                if (countdownOptions.onComplete && that.isFunction(countdownOptions.onComplete)) {
                    countdownOptions.onComplete.call(that, that.countdown);
                }
                that.onComplete.emit(that.countdown.toString());
                clearInterval(that.timer);
            }
            else {
                that.finishTime = that.finishTime - 1;
                that.date = that._countDownService.dhms(that.finishTime, that.countdown.format);
            }
        }, 1000);
    }
}
CountDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-count-down',
                template: `
    <div [ngClass]="countdown.theme">   <!--countdown.theme -->
      <span class="timer">{{date}}</span>
    </div>
  `,
                styles: [`
    .default-countdown-timer{
      border: 1px solid #ddd;
      color: #3c763d;
      background-color: transparent;
      padding: 10px 15px;
      margin-bottom: 20px;
      border-radius: 4px;
      display: inline-block;
    }
    .bootstrap-countdown-timer {
      color: #3c763d;
      background-color: #dff0d8;
      border-color: #d6e9c6;
      padding: 10px 15px;
      margin-bottom: 20px;
      border: 1px solid #d6e9c6;
      border-radius: 4px;
      display: inline-block;
    }
    .material-countdown-timer{
      color: #3c763d;
      background-color: #dff0d8;
      border-color: #d6e9c6;
      padding: 10px 15px;
      margin-bottom: 20px;
      border: 1px solid transparent;
      border-radius: 0px;
      display: inline-block;
    }
  `]
            },] },
];
/**
 * @nocollapse
 */
CountDownComponent.ctorParameters = () => [
    { type: CountDownService, },
];
CountDownComponent.propDecorators = {
    'time': [{ type: Input },],
    'onStart': [{ type: Output },],
    'onComplete': [{ type: Output },],
    'object': [{ type: Input },],
    'singleFormat': [{ type: Input },],
};
function CountDownComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CountDownComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CountDownComponent.ctorParameters;
    /** @type {?} */
    CountDownComponent.propDecorators;
    /** @type {?} */
    CountDownComponent.prototype.format;
    /** @type {?} */
    CountDownComponent.prototype.finishTime;
    /** @type {?} */
    CountDownComponent.prototype.timer;
    /** @type {?} */
    CountDownComponent.prototype.theme;
    /** @type {?} */
    CountDownComponent.prototype.countdown;
    /** @type {?} */
    CountDownComponent.prototype.date;
    /** @type {?} */
    CountDownComponent.prototype.time;
    /** @type {?} */
    CountDownComponent.prototype.onStart;
    /** @type {?} */
    CountDownComponent.prototype.onComplete;
    /** @type {?} */
    CountDownComponent.prototype.object;
    /** @type {?} */
    CountDownComponent.prototype.singleFormat;
    /** @type {?} */
    CountDownComponent.prototype._countDownService;
}
//# sourceMappingURL=count-down.component.js.map