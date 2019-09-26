import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { FormArray, NG_VALUE_ACCESSOR, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { faTimesCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgCatLibService {
    constructor() { }
}
NgCatLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgCatLibService.ctorParameters = () => [];
/** @nocollapse */ NgCatLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgCatLibService_Factory() { return new NgCatLibService(); }, token: NgCatLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgCatLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgCatLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'cat-ng-cat-lib',
                template: `
    <p>
      ng-cat-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
NgCatLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MultiTextboxComponent {
    /**
     * @param {?} formBuilder
     */
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.faTimesCircle = faTimesCircle;
        this.faPlusSquare = faPlusSquare;
        this.showAddNew = true;
        this.onChange = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.multiTextboxFormGroup = this.formBuilder.group({
            valueArray: this.formBuilder.array([])
        });
    }
    /**
     * @return {?}
     */
    addTextbox() {
        ((/** @type {?} */ (this.multiTextboxFormGroup.get('valueArray')))).push(this.createTextboxFormGroup(''));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeTextbox(index) {
        ((/** @type {?} */ (this.multiTextboxFormGroup.get('valueArray')))).removeAt(index);
    }
    // Receives value from parent
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        /** @type {?} */
        const control = new FormArray([]);
        if (value && value.length > 0) {
            value.split('|').forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                control.push(this.createTextboxFormGroup(item));
            }));
        }
        else {
            control.push(this.createTextboxFormGroup(''));
            this.showAddNew = false;
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.multiTextboxFormGroup.setControl('valueArray', control);
        this.subscription = ((/** @type {?} */ (this.multiTextboxFormGroup.get('valueArray')))).valueChanges.subscribe((/**
         * @param {?} items
         * @return {?}
         */
        items => {
            this.setShowAddNewProperty(items);
            this.onChange(items.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.value)).join('|'));
        }));
    }
    // Call when value changes
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        // throw new Error("Method not implemented.");
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        // throw new Error("Method not implemented.");
    }
    /**
     * @param {?} frmGrp
     * @param {?} key
     * @return {?}
     */
    getControls(frmGrp, key) {
        return ((/** @type {?} */ (frmGrp.controls[key]))).controls;
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    setShowAddNewProperty(items) {
        this.showAddNew = !(items.length === 1 && items[0].value === '');
    }
    /**
     * @private
     * @param {?} text
     * @return {?}
     */
    createTextboxFormGroup(text) {
        return this.formBuilder.group({
            value: text.trim()
        });
    }
}
MultiTextboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'cat-multi-textbox',
                template: "<div [formGroup]=\"multiTextboxFormGroup\" style=\"width: 100%;\">\n  <div formArrayName=\"valueArray\" style=\"width: 100%;\">\n    <div\n      *ngFor=\"\n        let item of getControls(multiTextboxFormGroup, 'valueArray');\n        let i = index\n      \"\n      style=\"width: 100%;\"\n    >\n      <div [formGroupName]=\"i\">\n        <mat-form-field>\n          <input matInput formControlName=\"value\" />\n          <fa-icon\n            style=\"position: absolute; cursor: pointer;\"\n            [icon]=\"faTimesCircle\"\n            (click)=\"removeTextbox(i)\"\n            *ngIf=\"getControls(multiTextboxFormGroup, 'valueArray').length > 1\"\n          ></fa-icon>\n        </mat-form-field>\n      </div>\n    </div>\n    <span\n      style=\"margin-left: 3px; cursor: pointer;\"\n      (click)=\"addTextbox()\"\n      *ngIf=\"showAddNew\"\n    >\n      <fa-icon [icon]=\"faPlusSquare\"></fa-icon>\n      Add New\n    </span>\n  </div>\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: MultiTextboxComponent,
                        multi: true
                    }
                ],
                styles: [""]
            }] }
];
/** @nocollapse */
MultiTextboxComponent.ctorParameters = () => [
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    MultiTextboxComponent.prototype.faTimesCircle;
    /** @type {?} */
    MultiTextboxComponent.prototype.faPlusSquare;
    /** @type {?} */
    MultiTextboxComponent.prototype.multiTextboxFormGroup;
    /** @type {?} */
    MultiTextboxComponent.prototype.valueArray;
    /** @type {?} */
    MultiTextboxComponent.prototype.showAddNew;
    /**
     * @type {?}
     * @private
     */
    MultiTextboxComponent.prototype.subscription;
    /** @type {?} */
    MultiTextboxComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    MultiTextboxComponent.prototype.formBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgCatLibModule {
}
NgCatLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgCatLibComponent, MultiTextboxComponent],
                imports: [
                    BrowserModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    FontAwesomeModule
                ],
                exports: [NgCatLibComponent, MultiTextboxComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MultiTextboxComponent, NgCatLibComponent, NgCatLibModule, NgCatLibService };
//# sourceMappingURL=ng-cat-lib.js.map
