import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritBrandsComponent } from './spirit-brands.component';

describe('SpiritBrandsComponent', () => {
  let component: SpiritBrandsComponent;
  let fixture: ComponentFixture<SpiritBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiritBrandsComponent]
    });
    fixture = TestBed.createComponent(SpiritBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
