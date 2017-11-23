import { Component, EventEmitter, Injectable, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

class CountDownService {
    constructor() {
        this.uniquecountdown = 0;
        this.countDownOptions = {
            theme: "default",
            format: "hh : mm : ss"
        };
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setCoundownOptions(options) {
        let /** @type {?} */ countdownOptions;
        countdownOptions = options;
        countdownOptions = countdownOptions || {
            theme: "default",
            format: "hh : mm : ss"
        };
        let /** @type {?} */ theme;
        if (countdownOptions.theme) {
            theme = CountDownService.THEMES.indexOf(countdownOptions.theme) > -1 ? countdownOptions.theme : "default";
        }
        else {
            theme = "default";
        }
        let /** @type {?} */ format;
        if (!countdownOptions.format) {
            format = "hh : mm : ss";
        }
        else {
            format = countdownOptions.format;
        }
        this.countDownOptions = countdownOptions;
    }
    /**
     * @return {?}
     */
    getdefaultCountDownOptions() {
        return this.countDownOptions;
    }
    /**
     * @param {?} s
     * @param {?} f
     * @return {?}
     */
    dhms(s, f) {
        var /** @type {?} */ d = 0;
        var /** @type {?} */ h = 0;
        var /** @type {?} */ m = 0;
        switch (true) {
            case (s > 86400):
                d = Math.floor(s / 86400);
                s -= d * 86400;
            case (s > 3600):
                h = Math.floor(s / 3600);
                s -= h * 3600;
            case (s > 60):
                m = Math.floor(s / 60);
                s -= m * 60;
        }
        if (f != null) {
            var /** @type {?} */ f = f.replace('dd', (d < 10) ? "0" + d : d);
            f = f.replace('d', d);
            f = f.replace('hh', (h < 10) ? "0" + h : h);
            f = f.replace('h', h);
            f = f.replace('mm', (m < 10) ? "0" + m : m);
            f = f.replace('m', m);
            f = f.replace('ss', (s < 10) ? "0" + s : s);
            f = f.replace('s', s);
        }
        else {
            f = d + ':' + h + ':' + m + ':' + s;
        }
        return f; // :) omg...
    }
}
CountDownService.THEMES = ['default', 'material', 'bootstrap'];
CountDownService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
CountDownService.ctorParameters = () => [];

class CountDownComponent {
    /**
     * @param {?} _countDownService
     */
    constructor(_countDownService) {
        this._countDownService = _countDownService;
        this.date = " - ";
        this.onStart = new EventEmitter();
        this.onComplete = new EventEmitter();
        this.selectedtheme = "default";
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
            theme: this.selectedtheme + '-countdown-timer' || countdownOptions.theme + '-countdown-timer',
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
    'selectedtheme': [{ type: Input },],
};

class CountDownModule {
}
CountDownModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [CountDownComponent],
                exports: [
                    CountDownComponent
                ],
                providers: [CountDownService]
            },] },
];
/**
 * @nocollapse
 */
CountDownModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { CountDownModule, CountDownComponent as ɵa, CountDownService as ɵb };
//# sourceMappingURL=ngx-countdown.js.map
