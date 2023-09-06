import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineFoodComponent } from './wine-food.component';

describe('WineFoodComponent', () => {
  let component: WineFoodComponent;
  let fixture: ComponentFixture<WineFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WineFoodComponent]
    });
    fixture = TestBed.createComponent(WineFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
