import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritTitleComponent } from './spirit-title.component';

describe('SpiritTitleComponent', () => {
  let component: SpiritTitleComponent;
  let fixture: ComponentFixture<SpiritTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiritTitleComponent]
    });
    fixture = TestBed.createComponent(SpiritTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
