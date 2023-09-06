import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinePageComponent } from './wine-page.component';

describe('WinePageComponent', () => {
  let component: WinePageComponent;
  let fixture: ComponentFixture<WinePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinePageComponent]
    });
    fixture = TestBed.createComponent(WinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
