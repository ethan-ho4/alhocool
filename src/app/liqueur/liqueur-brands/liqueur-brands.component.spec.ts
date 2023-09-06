import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqueurBrandsComponent } from './liqueur-brands.component';

describe('LiqueurBrandsComponent', () => {
  let component: LiqueurBrandsComponent;
  let fixture: ComponentFixture<LiqueurBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiqueurBrandsComponent]
    });
    fixture = TestBed.createComponent(LiqueurBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
