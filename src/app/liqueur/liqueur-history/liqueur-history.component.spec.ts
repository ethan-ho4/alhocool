import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqueurHistoryComponent } from './liqueur-history.component';

describe('LiqueurHistoryComponent', () => {
  let component: LiqueurHistoryComponent;
  let fixture: ComponentFixture<LiqueurHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiqueurHistoryComponent]
    });
    fixture = TestBed.createComponent(LiqueurHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
