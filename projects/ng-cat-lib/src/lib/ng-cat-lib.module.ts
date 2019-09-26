import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCatLibComponent } from './ng-cat-lib.component';
import { MultiTextboxComponent } from './multitextbox/multitextbox.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
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
})
export class NgCatLibModule {}
