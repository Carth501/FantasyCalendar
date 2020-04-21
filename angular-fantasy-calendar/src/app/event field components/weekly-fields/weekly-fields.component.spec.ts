import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyFieldsComponent } from './weekly-fields.component';

describe('WeeklyFieldsComponent', () => {
  let component: WeeklyFieldsComponent;
  let fixture: ComponentFixture<WeeklyFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
