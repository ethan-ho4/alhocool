import { Component, OnDestroy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  isLoggedIn = false;
  userEmail: string | null = null;
  userPassword: string | null = null; // Add this line
  private subscription: Subscription;

  constructor(
    private viewportScroller: ViewportScroller,
    private authService: AuthService // Inject the AuthService
  ) {
    // Subscribe to userCredentials$ observable from AuthService
    this.subscription = this.authService.userCredentials$.subscribe(credentials => {
      if (credentials) {
        this.userEmail = credentials.email;
        this.userPassword = credentials.password; // Update password from the credentials
        this.isLoggedIn = !!this.userEmail; // Update isLoggedIn based on whether email is present
      } else {
        this.userEmail = null;
        this.userPassword = null;
        this.isLoggedIn = false;
      }
    });
  }

  onLinkClick() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  handleLogin(): void {
    this.isLoggedIn = true;
    console.log('Logged in:', this.isLoggedIn);
  }
  
  handleLogout(): void {
    this.isLoggedIn = false;
    console.log('Logged out:', this.isLoggedIn);
  }

  // Implement OnDestroy to unsubscribe from observables
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
