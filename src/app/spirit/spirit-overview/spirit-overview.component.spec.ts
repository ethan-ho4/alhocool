import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritOverviewComponent } from './spirit-overview.component';

describe('SpiritOverviewComponent', () => {
  let component: SpiritOverviewComponent;
  let fixture: ComponentFixture<SpiritOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiritOverviewComponent]
    });
    fixture = TestBed.createComponent(SpiritOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
