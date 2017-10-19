"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CountdownService = (function () {
    function CountdownService() {
        this.uniquecountdown = 0;
        this.countdownOptions = {
            theme: "default",
            format: "hh : mm : ss"
        };
    }
    CountdownService.prototype.setCoundownOptions = function (options) {
        var countdownOptions;
        countdownOptions = options;
        countdownOptions = countdownOptions || {
            theme: "default",
            format: "hh : mm : ss"
        };
        var theme;
        if (countdownOptions.theme) {
            theme = CountdownService.THEMES.indexOf(countdownOptions.theme) > -1 ? countdownOptions.theme : "defult";
        }
        else {
            theme = "default";
        }
        var format;
        if (!countdownOptions.format) {
            format = "hh : mm : ss";
        }
        else {
            format = countdownOptions.format;
        }
        this.countdownOptions = countdownOptions;
    };
    CountdownService.prototype.getCountdwnOptions = function () {
        return this.countdownOptions;
    };
    CountdownService.prototype.dhms = function (s, f) {
        var d = 0;
        var h = 0;
        var m = 0;
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
            var f = f.replace('dd', (d < 10) ? "0" + d : d);
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
    };
    CountdownService.THEMES = ['default', 'material', 'bootstrap'];
    CountdownService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CountdownService);
    return CountdownService;
}());
exports.CountdownService = CountdownService;
//# sourceMappingURL=countdown.service.js.map