import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqueurTitleComponent } from './liqueur-title.component';

describe('LiqueurTitleComponent', () => {
  let component: LiqueurTitleComponent;
  let fixture: ComponentFixture<LiqueurTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiqueurTitleComponent]
    });
    fixture = TestBed.createComponent(LiqueurTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
