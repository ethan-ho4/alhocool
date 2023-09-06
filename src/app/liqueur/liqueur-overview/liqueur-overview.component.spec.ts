import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqueurOverviewComponent } from './liqueur-overview.component';

describe('LiqueurOverviewComponent', () => {
  let component: LiqueurOverviewComponent;
  let fixture: ComponentFixture<LiqueurOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiqueurOverviewComponent]
    });
    fixture = TestBed.createComponent(LiqueurOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
