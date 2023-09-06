import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerTitleComponent } from './beer-title.component';

describe('BeerTitleComponent', () => {
  let component: BeerTitleComponent;
  let fixture: ComponentFixture<BeerTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeerTitleComponent]
    });
    fixture = TestBed.createComponent(BeerTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
