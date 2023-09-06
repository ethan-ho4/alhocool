import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerBrandsComponent } from './beer-brands.component';

describe('BeerBrandsComponent', () => {
  let component: BeerBrandsComponent;
  let fixture: ComponentFixture<BeerBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeerBrandsComponent]
    });
    fixture = TestBed.createComponent(BeerBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
