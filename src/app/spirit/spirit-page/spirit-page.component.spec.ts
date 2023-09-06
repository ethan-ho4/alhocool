import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritPageComponent } from './spirit-page.component';

describe('SpiritPageComponent', () => {
  let component: SpiritPageComponent;
  let fixture: ComponentFixture<SpiritPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiritPageComponent]
    });
    fixture = TestBed.createComponent(SpiritPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
