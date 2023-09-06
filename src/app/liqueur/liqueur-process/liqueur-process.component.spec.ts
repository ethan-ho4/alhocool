import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqueurProcessComponent } from './liqueur-process.component';

describe('LiqueurProcessComponent', () => {
  let component: LiqueurProcessComponent;
  let fixture: ComponentFixture<LiqueurProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiqueurProcessComponent]
    });
    fixture = TestBed.createComponent(LiqueurProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
