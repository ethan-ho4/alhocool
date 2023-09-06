import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLogoutComponent } from './account-logout.component';

describe('AccountLogoutComponent', () => {
  let component: AccountLogoutComponent;
  let fixture: ComponentFixture<AccountLogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountLogoutComponent]
    });
    fixture = TestBed.createComponent(AccountLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
