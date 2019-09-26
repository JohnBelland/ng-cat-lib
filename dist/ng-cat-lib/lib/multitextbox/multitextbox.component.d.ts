import { FormGroup, FormArray, ControlValueAccessor, FormBuilder } from '@angular/forms';
export declare class MultiTextboxComponent implements ControlValueAccessor {
    private formBuilder;
    faTimesCircle: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faPlusSquare: import("@fortawesome/fontawesome-common-types").IconDefinition;
    multiTextboxFormGroup: FormGroup;
    valueArray: FormArray;
    showAddNew: boolean;
    private subscription;
    constructor(formBuilder: FormBuilder);
    onChange: any;
    ngOnInit(): void;
    addTextbox(): void;
    removeTextbox(index: number): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    getControls(frmGrp: FormGroup, key: string): import("@angular/forms").AbstractControl[];
    private setShowAddNewProperty;
    private createTextboxFormGroup;
}
