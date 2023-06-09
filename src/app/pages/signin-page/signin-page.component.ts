import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SigninService } from 'src/app/service/user/signin.service';
import { Signin } from 'src/interface/models';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css'],
})
export class SigninPageComponent {
  user!: Signin;

  signinForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  signupForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: [0, [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private signinService: SigninService,
    private signupService: UserService,
    private router: Router,
    private http: HttpClient
  ) {}

  onSubmitSignin() {
    const user = {
      email: this.signinForm.value.email,
      password: this.signinForm.value.password,
    };
    this.signinService.signIn(user).subscribe(
      (data) => {
        const accessToken = data.data.accessToken;
        const infoUser = { ...data.data.user, accessToken };
        localStorage.setItem('user', JSON.stringify(infoUser));
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onSubmit() {
    const user = {
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      phone: this.signupForm.value.phone,
      confirmPassword: this.signupForm.value.confirmPassword,
    };
    this.signupService
      .registerUser(user)
      .subscribe((data) => console.log(data));
  }
}
