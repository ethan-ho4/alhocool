import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceAlcoholFoodComponent } from './rice-alcohol-food.component';

describe('RiceAlcoholFoodComponent', () => {
  let component: RiceAlcoholFoodComponent;
  let fixture: ComponentFixture<RiceAlcoholFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiceAlcoholFoodComponent]
    });
    fixture = TestBed.createComponent(RiceAlcoholFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
