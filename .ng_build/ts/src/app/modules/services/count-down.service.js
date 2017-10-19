import { Injectable } from '@angular/core';
export class CountDownService {
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
function CountDownService_tsickle_Closure_declarations() {
    /** @type {?} */
    CountDownService.THEMES;
    /** @type {?} */
    CountDownService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CountDownService.ctorParameters;
    /** @type {?} */
    CountDownService.prototype.uniquecountdown;
    /** @type {?} */
    CountDownService.prototype.countDownOptions;
}
//# sourceMappingURL=count-down.service.js.map