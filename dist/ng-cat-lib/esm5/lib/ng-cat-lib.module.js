/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCatLibComponent } from './ng-cat-lib.component';
import { MultiTextboxComponent } from './multitextbox/multitextbox.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
export { NgCatLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2F0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jYXQtbGliLyIsInNvdXJjZXMiOlsibGliL25nLWNhdC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFO0lBQUE7SUFZNkIsQ0FBQzs7Z0JBWjdCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQztvQkFDeEQsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO2lCQUNwRDs7SUFDNEIscUJBQUM7Q0FBQSxBQVo5QixJQVk4QjtTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdDYXRMaWJDb21wb25lbnQgfSBmcm9tICcuL25nLWNhdC1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IE11bHRpVGV4dGJveENvbXBvbmVudCB9IGZyb20gJy4vbXVsdGl0ZXh0Ym94L211bHRpdGV4dGJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOZ0NhdExpYkNvbXBvbmVudCwgTXVsdGlUZXh0Ym94Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW05nQ2F0TGliQ29tcG9uZW50LCBNdWx0aVRleHRib3hDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5nQ2F0TGliTW9kdWxlIHt9XG4iXX0=