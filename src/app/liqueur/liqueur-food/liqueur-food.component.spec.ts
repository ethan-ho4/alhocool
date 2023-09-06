import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqueurFoodComponent } from './liqueur-food.component';

describe('LiqueurFoodComponent', () => {
  let component: LiqueurFoodComponent;
  let fixture: ComponentFixture<LiqueurFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiqueurFoodComponent]
    });
    fixture = TestBed.createComponent(LiqueurFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
