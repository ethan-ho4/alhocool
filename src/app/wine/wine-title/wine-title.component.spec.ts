import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineTitleComponent } from './wine-title.component';

describe('WineTitleComponent', () => {
  let component: WineTitleComponent;
  let fixture: ComponentFixture<WineTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WineTitleComponent]
    });
    fixture = TestBed.createComponent(WineTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
