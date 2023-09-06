import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceAlcoholTitleComponent } from './rice-alcohol-title.component';

describe('RiceAlcoholTitleComponent', () => {
  let component: RiceAlcoholTitleComponent;
  let fixture: ComponentFixture<RiceAlcoholTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiceAlcoholTitleComponent]
    });
    fixture = TestBed.createComponent(RiceAlcoholTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
