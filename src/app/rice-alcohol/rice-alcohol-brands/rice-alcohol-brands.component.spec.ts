import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceAlcoholBrandsComponent } from './rice-alcohol-brands.component';

describe('RiceAlcoholBrandsComponent', () => {
  let component: RiceAlcoholBrandsComponent;
  let fixture: ComponentFixture<RiceAlcoholBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiceAlcoholBrandsComponent]
    });
    fixture = TestBed.createComponent(RiceAlcoholBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
