import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceAlcoholHeaderComponent } from './rice-alcohol-header.component';

describe('RiceAlcoholHeaderComponent', () => {
  let component: RiceAlcoholHeaderComponent;
  let fixture: ComponentFixture<RiceAlcoholHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiceAlcoholHeaderComponent]
    });
    fixture = TestBed.createComponent(RiceAlcoholHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
