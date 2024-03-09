import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit{
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  value = 'Clear me';

  submitted = false;

  testForm = new FormGroup({
    testControl: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.testForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.testForm.invalid) {
      return;
    }
  }

}
