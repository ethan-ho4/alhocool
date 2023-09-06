import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqueurHeaderComponent } from './liqueur-header.component';

describe('LiqueurHeaderComponent', () => {
  let component: LiqueurHeaderComponent;
  let fixture: ComponentFixture<LiqueurHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiqueurHeaderComponent]
    });
    fixture = TestBed.createComponent(LiqueurHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
