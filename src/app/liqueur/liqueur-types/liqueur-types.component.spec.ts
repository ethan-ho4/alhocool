import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqueurTypesComponent } from './liqueur-types.component';

describe('LiqueurTypesComponent', () => {
  let component: LiqueurTypesComponent;
  let fixture: ComponentFixture<LiqueurTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiqueurTypesComponent]
    });
    fixture = TestBed.createComponent(LiqueurTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
