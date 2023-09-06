import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userCredentialsSubject = new BehaviorSubject<{ email: string, password: string } | null>(null);
  userCredentials$ = this.userCredentialsSubject.asObservable();

  updateUserCredentials(email: string, password: string): void {
    this.userCredentialsSubject.next({ email, password });
  }

  // Clear the user credentials
  clearUserCredentials(): void {
    this.userCredentialsSubject.next(null);
  }

  // If you want to get the current values directly
  getCurrentCredentials(): { email: string, password: string } | null {
    return this.userCredentialsSubject.value;
  }
}
