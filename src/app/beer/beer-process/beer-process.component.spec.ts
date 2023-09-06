import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerProcessComponent } from './beer-process.component';

describe('BeerProcessComponent', () => {
  let component: BeerProcessComponent;
  let fixture: ComponentFixture<BeerProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeerProcessComponent]
    });
    fixture = TestBed.createComponent(BeerProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
