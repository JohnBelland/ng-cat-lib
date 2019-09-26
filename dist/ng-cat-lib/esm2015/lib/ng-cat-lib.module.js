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
export class NgCatLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2F0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jYXQtbGliLyIsInNvdXJjZXMiOlsibGliL25nLWNhdC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBY3JFLE1BQU0sT0FBTyxjQUFjOzs7WUFaMUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO2dCQUN4RCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLENBQUM7YUFDcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ0NhdExpYkNvbXBvbmVudCB9IGZyb20gJy4vbmctY2F0LWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlUZXh0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9tdWx0aXRleHRib3gvbXVsdGl0ZXh0Ym94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05nQ2F0TGliQ29tcG9uZW50LCBNdWx0aVRleHRib3hDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTmdDYXRMaWJDb21wb25lbnQsIE11bHRpVGV4dGJveENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmdDYXRMaWJNb2R1bGUge31cbiJdfQ==