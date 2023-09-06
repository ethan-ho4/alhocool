import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankPageContentComponent } from './blank-page-content.component';

describe('BlankPageContentComponent', () => {
  let component: BlankPageContentComponent;
  let fixture: ComponentFixture<BlankPageContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlankPageContentComponent]
    });
    fixture = TestBed.createComponent(BlankPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
