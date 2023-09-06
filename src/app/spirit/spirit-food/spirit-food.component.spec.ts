import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritFoodComponent } from './spirit-food.component';

describe('SpiritFoodComponent', () => {
  let component: SpiritFoodComponent;
  let fixture: ComponentFixture<SpiritFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiritFoodComponent]
    });
    fixture = TestBed.createComponent(SpiritFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
