import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritHistoryComponent } from './spirit-history.component';

describe('SpiritHistoryComponent', () => {
  let component: SpiritHistoryComponent;
  let fixture: ComponentFixture<SpiritHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiritHistoryComponent]
    });
    fixture = TestBed.createComponent(SpiritHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
