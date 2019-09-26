import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multi-textbox',
  templateUrl: './multi-textbox.component.html',
  styleUrls: ['./multi-textbox.component.scss']
})
export class MultiTextboxComponent implements OnInit {
  testFormGroup: FormGroup;
  gatheredData: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.testFormGroup = this.formBuilder.group({
      delimitedData: ['John Doe|Billy Bob']
    });
  }

  getData() {
    this.gatheredData = this.testFormGroup.get('delimitedData').value;
  }
}
