import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearMonthDowFieldsComponent } from './year-month-dow-fields.component';

describe('YearMonthDowFieldsComponent', () => {
  let component: YearMonthDowFieldsComponent;
  let fixture: ComponentFixture<YearMonthDowFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearMonthDowFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearMonthDowFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
