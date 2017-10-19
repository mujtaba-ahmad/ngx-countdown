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
var countdown_service_1 = require('./countdown.service');
var CountdownComponent = (function () {
    function CountdownComponent(_countdownService) {
        this._countdownService = _countdownService;
        this.onStart = new core_1.EventEmitter();
        this.onComplete = new core_1.EventEmitter();
    }
    CountdownComponent.prototype.ngOnInit = function () {
        this.startCountDown();
    };
    CountdownComponent.prototype.ngOnChanges = function () {
        //this.startCountDown()
    };
    CountdownComponent.prototype.isFunction = function (obj) {
        return typeof obj === "function";
    };
    CountdownComponent.prototype.startCountDown = function () {
        var countdownOptions;
        countdownOptions = this._countdownService.getCountdwnOptions();
        console.log(this.time);
        console.log(countdownOptions);
        this.countdown = {
            timeInterval: this.time,
            object: this.object,
            format: countdownOptions.format,
            theme: countdownOptions.theme + '-countdown-timer',
            onStart: countdownOptions.onStart && this.isFunction(countdownOptions.onStart) ? countdownOptions.onStart : null,
            onComplete: countdownOptions.onComplete && this.isFunction(countdownOptions.onComplete) ? countdownOptions.onComplete : null
        };
        this.onStart.emit(this.countdown);
        if (countdownOptions.onStart && this.isFunction(countdownOptions.onStart)) {
            countdownOptions.onStart.call(this, this.countdown);
        }
        this.finishTime = this.countdown.timeInterval;
        var that = this;
        this.timer = setInterval(function () {
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
        }, 1000);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CountdownComponent.prototype, "time", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CountdownComponent.prototype, "onStart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CountdownComponent.prototype, "onComplete", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CountdownComponent.prototype, "object", void 0);
    CountdownComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'countdown',
            templateUrl: './countdown.component.html'
        }), 
        __metadata('design:paramtypes', [countdown_service_1.CountdownService])
    ], CountdownComponent);
    return CountdownComponent;
}());
exports.CountdownComponent = CountdownComponent;
//# sourceMappingURL=countdown.component.js.map