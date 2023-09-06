import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerFoodComponent } from './beer-food.component';

describe('BeerFoodComponent', () => {
  let component: BeerFoodComponent;
  let fixture: ComponentFixture<BeerFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeerFoodComponent]
    });
    fixture = TestBed.createComponent(BeerFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
