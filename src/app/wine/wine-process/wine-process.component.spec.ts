import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineProcessComponent } from './wine-process.component';

describe('WineProcessComponent', () => {
  let component: WineProcessComponent;
  let fixture: ComponentFixture<WineProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WineProcessComponent]
    });
    fixture = TestBed.createComponent(WineProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
