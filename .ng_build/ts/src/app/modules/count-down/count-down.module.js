import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownComponent } from './count-down.component';
import { CountDownService } from '../services/count-down.service';
export class CountDownModule {
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
function CountDownModule_tsickle_Closure_declarations() {
    /** @type {?} */
    CountDownModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CountDownModule.ctorParameters;
}
//# sourceMappingURL=count-down.module.js.map