import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceAlcoholTypesComponent } from './rice-alcohol-types.component';

describe('RiceAlcoholTypesComponent', () => {
  let component: RiceAlcoholTypesComponent;
  let fixture: ComponentFixture<RiceAlcoholTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiceAlcoholTypesComponent]
    });
    fixture = TestBed.createComponent(RiceAlcoholTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
