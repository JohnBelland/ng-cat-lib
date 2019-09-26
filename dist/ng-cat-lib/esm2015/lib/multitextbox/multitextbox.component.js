/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormArray, FormBuilder } from '@angular/forms';
import { faTimesCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
export class MultiTextboxComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGl0ZXh0Ym94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNhdC1saWIvIiwic291cmNlcyI6WyJsaWIvbXVsdGl0ZXh0Ym94L211bHRpdGV4dGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUNMLGlCQUFpQixFQUVqQixTQUFTLEVBRVQsV0FBVyxFQUNaLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQWNoRixNQUFNLE9BQU8scUJBQXFCOzs7O0lBUWhDLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUHJDLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBRzVCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFJbEIsYUFBUTs7O1FBQVEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDO0lBRGUsQ0FBQzs7OztJQUd6QyxRQUFRO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xELFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7U0FDdkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVNLFVBQVU7UUFDZixDQUFDLG1CQUFBLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQWEsQ0FBQyxDQUFDLElBQUksQ0FDOUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxDQUNoQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsS0FBYTtRQUNoQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7Ozs7SUFHTSxVQUFVLENBQUMsS0FBSzs7Y0FDZixPQUFPLEdBQUcsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1FBQ2pDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xELENBQUMsRUFBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUNqRCxZQUFZLENBQ2IsRUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBR00sZ0JBQWdCLENBQUMsRUFBRTtRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLGlCQUFpQixDQUFDLEVBQU87UUFDOUIsOENBQThDO0lBQ2hELENBQUM7Ozs7O0lBRU0sZ0JBQWdCLENBQUUsVUFBbUI7UUFDMUMsOENBQThDO0lBQ2hELENBQUM7Ozs7OztJQUVNLFdBQVcsQ0FBQyxNQUFpQixFQUFFLEdBQVc7UUFDL0MsT0FBTyxDQUFDLG1CQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxLQUFVO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsSUFBWTtRQUN6QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQzVCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQTFGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsNDhCQUE0QztnQkFFNUMsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxxQkFBcUI7d0JBQ2xDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOzthQUNGOzs7O1lBaEJDLFdBQVc7Ozs7SUFrQlgsOENBQXFDOztJQUNyQyw2Q0FBbUM7O0lBQ25DLHNEQUF3Qzs7SUFDeEMsMkNBQTZCOztJQUM3QiwyQ0FBeUI7Ozs7O0lBQ3pCLDZDQUFtQzs7SUFHbkMseUNBQWdDOzs7OztJQURwQiw0Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBGb3JtR3JvdXAsXG4gIEZvcm1BcnJheSxcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1CdWlsZGVyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmFUaW1lc0NpcmNsZSwgZmFQbHVzU3F1YXJlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2F0LW11bHRpLXRleHRib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXVsdGl0ZXh0Ym94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXVsdGl0ZXh0Ym94LmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogTXVsdGlUZXh0Ym94Q29tcG9uZW50LFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlUZXh0Ym94Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwdWJsaWMgZmFUaW1lc0NpcmNsZSA9IGZhVGltZXNDaXJjbGU7XG4gIHB1YmxpYyBmYVBsdXNTcXVhcmUgPSBmYVBsdXNTcXVhcmU7XG4gIHB1YmxpYyBtdWx0aVRleHRib3hGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgcHVibGljIHZhbHVlQXJyYXk6IEZvcm1BcnJheTtcbiAgcHVibGljIHNob3dBZGROZXcgPSB0cnVlO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuICBwdWJsaWMgb25DaGFuZ2U6IGFueSA9ICgpID0+IHt9O1xuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm11bHRpVGV4dGJveEZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdmFsdWVBcnJheTogdGhpcy5mb3JtQnVpbGRlci5hcnJheShbXSlcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRUZXh0Ym94KCkge1xuICAgICh0aGlzLm11bHRpVGV4dGJveEZvcm1Hcm91cC5nZXQoJ3ZhbHVlQXJyYXknKSBhcyBGb3JtQXJyYXkpLnB1c2goXG4gICAgICB0aGlzLmNyZWF0ZVRleHRib3hGb3JtR3JvdXAoJycpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVUZXh0Ym94KGluZGV4OiBudW1iZXIpIHtcbiAgICAodGhpcy5tdWx0aVRleHRib3hGb3JtR3JvdXAuZ2V0KCd2YWx1ZUFycmF5JykgYXMgRm9ybUFycmF5KS5yZW1vdmVBdChpbmRleCk7XG4gIH1cblxuICAvLyBSZWNlaXZlcyB2YWx1ZSBmcm9tIHBhcmVudFxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUFycmF5KFtdKTtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgdmFsdWUuc3BsaXQoJ3wnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb250cm9sLnB1c2godGhpcy5jcmVhdGVUZXh0Ym94Rm9ybUdyb3VwKGl0ZW0pKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250cm9sLnB1c2godGhpcy5jcmVhdGVUZXh0Ym94Rm9ybUdyb3VwKCcnKSk7XG4gICAgICB0aGlzLnNob3dBZGROZXcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5tdWx0aVRleHRib3hGb3JtR3JvdXAuc2V0Q29udHJvbCgndmFsdWVBcnJheScsIGNvbnRyb2wpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSAodGhpcy5tdWx0aVRleHRib3hGb3JtR3JvdXAuZ2V0KFxuICAgICAgJ3ZhbHVlQXJyYXknXG4gICAgKSBhcyBGb3JtQXJyYXkpLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoaXRlbXMgPT4ge1xuICAgICAgdGhpcy5zZXRTaG93QWRkTmV3UHJvcGVydHkoaXRlbXMpO1xuICAgICAgdGhpcy5vbkNoYW5nZShpdGVtcy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKS5qb2luKCd8JykpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQ2FsbCB3aGVuIHZhbHVlIGNoYW5nZXNcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG5cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb250cm9scyhmcm1HcnA6IEZvcm1Hcm91cCwga2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gKGZybUdycC5jb250cm9sc1trZXldIGFzIEZvcm1BcnJheSkuY29udHJvbHM7XG4gIH1cblxuICBwcml2YXRlIHNldFNob3dBZGROZXdQcm9wZXJ0eShpdGVtczogYW55KSB7XG4gICAgdGhpcy5zaG93QWRkTmV3ID0gIShpdGVtcy5sZW5ndGggPT09IDEgJiYgaXRlbXNbMF0udmFsdWUgPT09ICcnKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVGV4dGJveEZvcm1Hcm91cCh0ZXh0OiBzdHJpbmcpOiBGb3JtR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHZhbHVlOiB0ZXh0LnRyaW0oKVxuICAgIH0pO1xuICB9XG59XG4iXX0=