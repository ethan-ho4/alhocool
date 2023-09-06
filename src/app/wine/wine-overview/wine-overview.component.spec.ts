import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineOverviewComponent } from './wine-overview.component';

describe('WineOverviewComponent', () => {
  let component: WineOverviewComponent;
  let fixture: ComponentFixture<WineOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WineOverviewComponent]
    });
    fixture = TestBed.createComponent(WineOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
