import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceAlcoholHistoryComponent } from './rice-alcohol-history.component';

describe('RiceAlcoholHistoryComponent', () => {
  let component: RiceAlcoholHistoryComponent;
  let fixture: ComponentFixture<RiceAlcoholHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiceAlcoholHistoryComponent]
    });
    fixture = TestBed.createComponent(RiceAlcoholHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
