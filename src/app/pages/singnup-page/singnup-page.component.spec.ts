import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingnupPageComponent } from './singnup-page.component';

describe('SingnupPageComponent', () => {
  let component: SingnupPageComponent;
  let fixture: ComponentFixture<SingnupPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingnupPageComponent]
    });
    fixture = TestBed.createComponent(SingnupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
