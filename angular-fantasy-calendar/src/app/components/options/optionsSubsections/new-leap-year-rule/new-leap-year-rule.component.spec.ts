import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLeapYearRuleComponent } from './new-leap-year-rule.component';

describe('NewLeapYearRuleComponent', () => {
  let component: NewLeapYearRuleComponent;
  let fixture: ComponentFixture<NewLeapYearRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLeapYearRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLeapYearRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
