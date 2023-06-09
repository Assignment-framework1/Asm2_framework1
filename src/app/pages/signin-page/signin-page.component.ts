import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SigninService } from 'src/app/service/user/signin.service';
import { Signin } from 'src/interface/models';
import { Router } from '@angular/router';

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

  constructor(
    private fb: FormBuilder,
    private signinService: SigninService,
    private router: Router
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
        this.router.navigate([""])
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
