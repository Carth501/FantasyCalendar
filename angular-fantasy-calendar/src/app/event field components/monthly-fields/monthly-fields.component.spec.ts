import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyFieldsComponent } from './monthly-fields.component';

describe('MonthlyFieldsComponent', () => {
  let component: MonthlyFieldsComponent;
  let fixture: ComponentFixture<MonthlyFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
