import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAuthenticationComponent } from './AdAuthenticationComponent';

describe('AdAuthenticationComponent', () => {
  let component: AdAuthenticationComponent;
  let fixture: ComponentFixture<AdAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdAuthenticationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
