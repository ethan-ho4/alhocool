import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineBrandsComponent } from './wine-brands.component';

describe('WineBrandsComponent', () => {
  let component: WineBrandsComponent;
  let fixture: ComponentFixture<WineBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WineBrandsComponent]
    });
    fixture = TestBed.createComponent(WineBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
