import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqueurPageComponent } from './liqueur-page.component';

describe('LiqueurPageComponent', () => {
  let component: LiqueurPageComponent;
  let fixture: ComponentFixture<LiqueurPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiqueurPageComponent]
    });
    fixture = TestBed.createComponent(LiqueurPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
