import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerPageComponent } from './beer-page.component';

describe('BeerPageComponent', () => {
  let component: BeerPageComponent;
  let fixture: ComponentFixture<BeerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeerPageComponent]
    });
    fixture = TestBed.createComponent(BeerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
