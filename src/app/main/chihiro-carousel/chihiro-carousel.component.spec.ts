import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChihiroCarouselComponent } from './chihiro-carousel.component';

describe('ChihiroCarouselComponent', () => {
  let component: ChihiroCarouselComponent;
  let fixture: ComponentFixture<ChihiroCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChihiroCarouselComponent]
    });
    fixture = TestBed.createComponent(ChihiroCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
