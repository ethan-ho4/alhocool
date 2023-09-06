import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ViewportScroller } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit, OnDestroy {
  email: string | null = null;
  password: string | null = null;
  private subscription!: Subscription;

  constructor(
    private authService: AuthService, 
    private viewportScroller: ViewportScroller,
    private router: Router  // Inject the Router
  ) {}

  onLinkClick() {
    this.authService.clearUserCredentials(); // Clear the credentials
    this.router.navigate(['/main']); // Navigate to the main page
  }

  ngOnInit(): void {
    this.subscription = this.authService.userCredentials$.subscribe(credentials => {
      if (credentials) {
        this.email = credentials.email;
        this.password = credentials.password;
      } else {
        this.email = null;
        this.password = null;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
