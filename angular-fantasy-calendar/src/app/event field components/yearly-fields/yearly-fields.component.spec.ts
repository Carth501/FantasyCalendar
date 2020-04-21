import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyFieldsComponent } from './yearly-fields.component';

describe('YearlyFieldsComponent', () => {
  let component: YearlyFieldsComponent;
  let fixture: ComponentFixture<YearlyFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlyFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
