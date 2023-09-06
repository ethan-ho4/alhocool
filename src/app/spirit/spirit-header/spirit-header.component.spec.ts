import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritHeaderComponent } from './spirit-header.component';

describe('SpiritHeaderComponent', () => {
  let component: SpiritHeaderComponent;
  let fixture: ComponentFixture<SpiritHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiritHeaderComponent]
    });
    fixture = TestBed.createComponent(SpiritHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
