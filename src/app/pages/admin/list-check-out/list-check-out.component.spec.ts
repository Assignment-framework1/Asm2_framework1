import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCheckOutComponent } from './list-check-out.component';

describe('ListCheckOutComponent', () => {
  let component: ListCheckOutComponent;
  let fixture: ComponentFixture<ListCheckOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCheckOutComponent]
    });
    fixture = TestBed.createComponent(ListCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
