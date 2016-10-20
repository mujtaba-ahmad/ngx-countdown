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
var counter_service_1 = require('./counter.service');
var CounterComponent = (function () {
    function CounterComponent(_counterService) {
        this._counterService = _counterService;
        this.onStart = new core_1.EventEmitter();
        this.onComplete = new core_1.EventEmitter();
    }
    CounterComponent.prototype.ngOnInit = function () {
        this.startCountDown();
    };
    CounterComponent.prototype.ngOnChanges = function () {
        //this.startCountDown()
    };
    CounterComponent.prototype.isFunction = function (obj) {
        return typeof obj === "function";
    };
    CounterComponent.prototype.startCountDown = function () {
        var counterOptions;
        counterOptions = this._counterService.getCountdwnOptions();
        console.log(this.time);
        console.log(counterOptions);
        this.countdown = {
            timeInterval: this.time,
            format: counterOptions.format,
            theme: counterOptions.theme + '-countdown-timer',
            onStart: counterOptions.onStart && this.isFunction(counterOptions.onStart) ? counterOptions.onStart : null,
            onComplete: counterOptions.onComplete && this.isFunction(counterOptions.onComplete) ? counterOptions.onComplete : null
        };
        this.onStart.emit(this.countdown);
        if (counterOptions.onStart && this.isFunction(counterOptions.onStart)) {
            counterOptions.onStart.call(this, this.countdown);
        }
        this.finishTime = this.countdown.timeInterval;
        var that = this;
        this.timer = setInterval(function () {
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
        }, 1000);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CounterComponent.prototype, "time", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CounterComponent.prototype, "onStart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CounterComponent.prototype, "onComplete", void 0);
    CounterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'countdown',
            templateUrl: './counter.component.html'
        }), 
        __metadata('design:paramtypes', [counter_service_1.CounterService])
    ], CounterComponent);
    return CounterComponent;
}());
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map