import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineHistoryComponent } from './wine-history.component';

describe('WineHistoryComponent', () => {
  let component: WineHistoryComponent;
  let fixture: ComponentFixture<WineHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WineHistoryComponent]
    });
    fixture = TestBed.createComponent(WineHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
