import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RctTableComponent } from './rct-table.component';

describe('RctTableComponent', () => {
  let component: RctTableComponent;
  let fixture: ComponentFixture<RctTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RctTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RctTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
