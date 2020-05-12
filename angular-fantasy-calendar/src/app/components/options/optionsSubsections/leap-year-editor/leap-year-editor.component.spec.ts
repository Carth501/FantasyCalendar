import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeapYearEditorComponent } from './leap-year-editor.component';

describe('LeapYearEditorComponent', () => {
  let component: LeapYearEditorComponent;
  let fixture: ComponentFixture<LeapYearEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeapYearEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeapYearEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
