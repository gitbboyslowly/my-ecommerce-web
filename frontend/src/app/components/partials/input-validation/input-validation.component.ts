import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MASSAGES: any = {
  required: 'Should not be empty',
  email: 'Email is not valid',
  minlength: 'Field is too short',
  notMatch: 'Passwords do not match',
};

@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.css'
})
export class InputValidationComponent implements OnInit, OnChanges {
  @Input() control!: AbstractControl;
  @Input() showErrorsWhen: boolean = true;
  errorsMessages: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    });
  }

  checkValidation() {
    const errors = this.control.errors;
    if (!errors) {
      this.errorsMessages = [];
      return;
    }

    const errorKeys = Object.keys(errors);
    this.errorsMessages = errorKeys.map(key => VALIDATORS_MASSAGES[key]);
  }
}
