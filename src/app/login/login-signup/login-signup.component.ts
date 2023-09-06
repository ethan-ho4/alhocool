import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  isLoginMode = true;
  errorMessage: string = '';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder, 
    private afAuth: AngularFireAuth, 
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  switchMode(isLoginMode: boolean) {
    this.isLoginMode = isLoginMode;
    this.errorMessage = '';
  }

  async login() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    try {
      await this.afAuth.signInWithEmailAndPassword(email ?? '', password ?? '');
      if (email && password) {
        this.authService.updateUserCredentials(email, password);
      }
      this.router.navigate(['/main']); 
    } catch (error: any) {
      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
        this.errorMessage = 'Incorrect username or password';
      } else {
        this.errorMessage = error.message;
      }
    }
  }

  async signup() {
    if (this.signupForm.invalid) {
      return;
    }

    const { email, password, confirmPassword } = this.signupForm.value;

    if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    try {
      await this.afAuth.createUserWithEmailAndPassword(email ?? '', password ?? '');
      if (email && password) {
        this.authService.updateUserCredentials(email, password);
      }
      this.router.navigate(['/main']);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        this.errorMessage = 'Email already exists with an account';
      } else {
        this.errorMessage = error.message;
      }
    }
  }
}
