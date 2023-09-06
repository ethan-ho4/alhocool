import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceAlcoholPageComponent } from './rice-alcohol-page.component';

describe('RiceAlcoholPageComponent', () => {
  let component: RiceAlcoholPageComponent;
  let fixture: ComponentFixture<RiceAlcoholPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiceAlcoholPageComponent]
    });
    fixture = TestBed.createComponent(RiceAlcoholPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
