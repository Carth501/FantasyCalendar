import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthDOWFieldsComponent } from './month-dow-fields.component';

describe('MonthDOWFieldsComponent', () => {
  let component: MonthDOWFieldsComponent;
  let fixture: ComponentFixture<MonthDOWFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthDOWFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthDOWFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
