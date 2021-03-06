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
var NgCatLibService = /** @class */ (function () {
    function NgCatLibService() {
    }
    NgCatLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgCatLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgCatLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgCatLibService_Factory() { return new NgCatLibService(); }, token: NgCatLibService, providedIn: "root" });
    return NgCatLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgCatLibComponent = /** @class */ (function () {
    function NgCatLibComponent() {
    }
    /**
     * @return {?}
     */
    NgCatLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgCatLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cat-ng-cat-lib',
                    template: "\n    <p>\n      ng-cat-lib works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    NgCatLibComponent.ctorParameters = function () { return []; };
    return NgCatLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MultiTextboxComponent = /** @class */ (function () {
    function MultiTextboxComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.faTimesCircle = faTimesCircle;
        this.faPlusSquare = faPlusSquare;
        this.showAddNew = true;
        this.onChange = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @return {?}
     */
    MultiTextboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.multiTextboxFormGroup = this.formBuilder.group({
            valueArray: this.formBuilder.array([])
        });
    };
    /**
     * @return {?}
     */
    MultiTextboxComponent.prototype.addTextbox = /**
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this.multiTextboxFormGroup.get('valueArray')))).push(this.createTextboxFormGroup(''));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MultiTextboxComponent.prototype.removeTextbox = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        ((/** @type {?} */ (this.multiTextboxFormGroup.get('valueArray')))).removeAt(index);
    };
    // Receives value from parent
    // Receives value from parent
    /**
     * @param {?} value
     * @return {?}
     */
    MultiTextboxComponent.prototype.writeValue = 
    // Receives value from parent
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var control = new FormArray([]);
        if (value && value.length > 0) {
            value.split('|').forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                control.push(_this.createTextboxFormGroup(item));
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
        function (items) {
            _this.setShowAddNewProperty(items);
            _this.onChange(items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.value; })).join('|'));
        }));
    };
    // Call when value changes
    // Call when value changes
    /**
     * @param {?} fn
     * @return {?}
     */
    MultiTextboxComponent.prototype.registerOnChange = 
    // Call when value changes
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MultiTextboxComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        // throw new Error("Method not implemented.");
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MultiTextboxComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        // throw new Error("Method not implemented.");
    };
    /**
     * @param {?} frmGrp
     * @param {?} key
     * @return {?}
     */
    MultiTextboxComponent.prototype.getControls = /**
     * @param {?} frmGrp
     * @param {?} key
     * @return {?}
     */
    function (frmGrp, key) {
        return ((/** @type {?} */ (frmGrp.controls[key]))).controls;
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    MultiTextboxComponent.prototype.setShowAddNewProperty = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.showAddNew = !(items.length === 1 && items[0].value === '');
    };
    /**
     * @private
     * @param {?} text
     * @return {?}
     */
    MultiTextboxComponent.prototype.createTextboxFormGroup = /**
     * @private
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return this.formBuilder.group({
            value: text.trim()
        });
    };
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
    MultiTextboxComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    return MultiTextboxComponent;
}());
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
var NgCatLibModule = /** @class */ (function () {
    function NgCatLibModule() {
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
    return NgCatLibModule;
}());

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
