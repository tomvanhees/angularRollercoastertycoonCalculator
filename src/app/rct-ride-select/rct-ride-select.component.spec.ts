import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RctRideSelectComponent } from './rct-ride-select.component';

describe('RctRideSelectComponent', () => {
  let component: RctRideSelectComponent;
  let fixture: ComponentFixture<RctRideSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RctRideSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RctRideSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
