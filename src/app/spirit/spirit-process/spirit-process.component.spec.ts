import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritProcessComponent } from './spirit-process.component';

describe('SpiritProcessComponent', () => {
  let component: SpiritProcessComponent;
  let fixture: ComponentFixture<SpiritProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiritProcessComponent]
    });
    fixture = TestBed.createComponent(SpiritProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
