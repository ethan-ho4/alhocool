import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritTypesComponent } from './spirit-types.component';

describe('SpiritTypesComponent', () => {
  let component: SpiritTypesComponent;
  let fixture: ComponentFixture<SpiritTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiritTypesComponent]
    });
    fixture = TestBed.createComponent(SpiritTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
