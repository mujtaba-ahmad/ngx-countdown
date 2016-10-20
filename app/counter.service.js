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
var CounterService = (function () {
    function CounterService() {
        this.uniqueCounter = 0;
        this.counterOptions = {
            theme: "default",
            format: "hh : mm : ss"
        };
    }
    CounterService.prototype.setCoundownOptions = function (options) {
        var counterOptions;
        counterOptions = options;
        counterOptions = counterOptions || {
            theme: "default",
            format: "hh : mm : ss"
        };
        var theme;
        if (counterOptions.theme) {
            theme = CounterService.THEMES.indexOf(counterOptions.theme) > -1 ? counterOptions.theme : "defult";
        }
        else {
            theme = "default";
        }
        var format;
        if (!counterOptions.format) {
            format = "hh : mm : ss";
        }
        else {
            format = counterOptions.format;
        }
        this.counterOptions = counterOptions;
    };
    CounterService.prototype.getCountdwnOptions = function () {
        return this.counterOptions;
    };
    CounterService.prototype.dhms = function (s, f) {
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
    CounterService.THEMES = ['default', 'material', 'bootstrap'];
    CounterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CounterService);
    return CounterService;
}());
exports.CounterService = CounterService;
//# sourceMappingURL=counter.service.js.map