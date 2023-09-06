import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceAlcoholOverviewComponent } from './rice-alcohol-overview.component';

describe('RiceAlcoholOverviewComponent', () => {
  let component: RiceAlcoholOverviewComponent;
  let fixture: ComponentFixture<RiceAlcoholOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiceAlcoholOverviewComponent]
    });
    fixture = TestBed.createComponent(RiceAlcoholOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
