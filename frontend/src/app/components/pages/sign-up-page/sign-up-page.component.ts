import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordsMatchValidator } from '../../../shared/validators/password_match_validator';
import { IUserSignUp } from '../../../shared/interfaces/IUserSignUp';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {

  signUpForm!: FormGroup;
  isSubmitted = false;

  returnUrl = '';
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(10)]],
    }, {
      validator: PasswordsMatchValidator('password', 'confirmPassword')
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get formCtrl() { return this.signUpForm.controls; }

  submit() {
    this.isSubmitted = true;
    if (this.signUpForm.invalid) return;

    const formValue = this.signUpForm.value;
    const user: IUserSignUp = {
      name: formValue.name,
      email: formValue.email,
      password: formValue.password,
      confirmPassword: formValue.confirmPassword,
      address: formValue.address
    };

    this.userService.signUp(user).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}
