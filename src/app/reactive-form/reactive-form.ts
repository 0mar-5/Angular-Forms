import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

function passwordMatchValidator(
  control: AbstractControl
): ValidationErrors | null {
  const passwordControl = control.get('password');
  const confirmPasswordControl = control.get('confermPassword');

  if (
    !passwordControl ||
    !confirmPasswordControl ||
    confirmPasswordControl.value === null
  ) {
    return null;
  }

  if (passwordControl.value !== confirmPasswordControl.value) {
    confirmPasswordControl.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  } else {
    if (confirmPasswordControl.hasError('passwordMismatch')) {
      confirmPasswordControl.setErrors(null);
    }
    return null;
  }
}
@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveForm implements OnInit {
  myReactiveForm!: FormGroup;

  ngOnInit() {
    this.myReactiveForm = new FormGroup(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('[^\\s@]+@[^\\s@]+\\.[^\\s@]+$'),
        ]),
        userName: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()\\-_=+{};:,<.>]).{8,12}$'
          ),
        ]),
        confermPassword: new FormControl('', [Validators.required]),
      },
      { validators: passwordMatchValidator }
    );
  }

  formSubmit() {
    console.log(this.myReactiveForm.value);
  }
}
