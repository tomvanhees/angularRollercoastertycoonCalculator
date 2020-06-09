import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RctRidestatsComponent } from './rct-ridestats.component';

describe('RctRidestatsComponent', () => {
  let component: RctRidestatsComponent;
  let fixture: ComponentFixture<RctRidestatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RctRidestatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RctRidestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
