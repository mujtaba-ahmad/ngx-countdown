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
var AppComponent = (function () {
    function AppComponent(_counterService) {
        this._counterService = _counterService;
        var counterOptions = {
            theme: 'material',
            format: "hh:mm:ss",
            onStart: function (counter) {
                console.log('Toast ' + counter.timeInterval + ' has been started!');
            },
            onComplete: function (counter) {
                console.log('Toast ' + counter.timeInterval + ' has been completed!');
            }
        };
        _counterService.setCoundownOptions(counterOptions);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onStart = function (counter) {
        console.log('counter ' + counter.timeInterval + ' has been started!');
    };
    AppComponent.prototype.onComplete = function (counter) {
        console.log('counter ' + counter.timeInterval + ' has been started!');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>My First Angular App</h1>\n  \t\t\t <countdown [time]=\"'10'\" (onStart)=\"onStart($event)\" (onComplete)=\"onComplete($event)\"></countdown>\n\t\t\t <countdown [time]=\"'20'\"></countdown>"
        }), 
        __metadata('design:paramtypes', [counter_service_1.CounterService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map