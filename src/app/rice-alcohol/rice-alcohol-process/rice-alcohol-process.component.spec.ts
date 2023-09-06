import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceAlcoholProcessComponent } from './rice-alcohol-process.component';

describe('RiceAlcoholProcessComponent', () => {
  let component: RiceAlcoholProcessComponent;
  let fixture: ComponentFixture<RiceAlcoholProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiceAlcoholProcessComponent]
    });
    fixture = TestBed.createComponent(RiceAlcoholProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
