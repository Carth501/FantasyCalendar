import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearMonthlyFieldsComponent } from './year-monthly-fields.component';

describe('YearMonthlyFieldsComponent', () => {
  let component: YearMonthlyFieldsComponent;
  let fixture: ComponentFixture<YearMonthlyFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearMonthlyFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearMonthlyFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
