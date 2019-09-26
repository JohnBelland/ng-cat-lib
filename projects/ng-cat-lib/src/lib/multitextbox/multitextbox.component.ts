import { Component } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  FormGroup,
  FormArray,
  ControlValueAccessor,
  FormBuilder
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { faTimesCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cat-multi-textbox',
  templateUrl: './multitextbox.component.html',
  styleUrls: ['./multitextbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MultiTextboxComponent,
      multi: true
    }
  ]
})
export class MultiTextboxComponent implements ControlValueAccessor {
  public faTimesCircle = faTimesCircle;
  public faPlusSquare = faPlusSquare;
  public multiTextboxFormGroup: FormGroup;
  public valueArray: FormArray;
  public showAddNew = true;
  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder) {}
  public onChange: any = () => {};

  public ngOnInit() {
    this.multiTextboxFormGroup = this.formBuilder.group({
      valueArray: this.formBuilder.array([])
    });
  }

  public addTextbox() {
    (this.multiTextboxFormGroup.get('valueArray') as FormArray).push(
      this.createTextboxFormGroup('')
    );
  }

  public removeTextbox(index: number) {
    (this.multiTextboxFormGroup.get('valueArray') as FormArray).removeAt(index);
  }

  // Receives value from parent
  public writeValue(value) {
    const control = new FormArray([]);
    if (value && value.length > 0) {
      value.split('|').forEach(item => {
        control.push(this.createTextboxFormGroup(item));
      });
    } else {
      control.push(this.createTextboxFormGroup(''));
      this.showAddNew = false;
    }

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.multiTextboxFormGroup.setControl('valueArray', control);

    this.subscription = (this.multiTextboxFormGroup.get(
      'valueArray'
    ) as FormArray).valueChanges.subscribe(items => {
      this.setShowAddNewProperty(items);
      this.onChange(items.map(item => item.value).join('|'));
    });
  }

  // Call when value changes
  public registerOnChange(fn) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
  }

  public setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }

  public getControls(frmGrp: FormGroup, key: string) {
    return (frmGrp.controls[key] as FormArray).controls;
  }

  private setShowAddNewProperty(items: any) {
    this.showAddNew = !(items.length === 1 && items[0].value === '');
  }

  private createTextboxFormGroup(text: string): FormGroup {
    return this.formBuilder.group({
      value: text.trim()
    });
  }
}
