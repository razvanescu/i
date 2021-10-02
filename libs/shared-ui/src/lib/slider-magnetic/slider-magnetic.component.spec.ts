import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMagneticComponent } from './slider-magnetic.component';

describe('SliderMagneticComponent', () => {
  let component: SliderMagneticComponent;
  let fixture: ComponentFixture<SliderMagneticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderMagneticComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMagneticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
