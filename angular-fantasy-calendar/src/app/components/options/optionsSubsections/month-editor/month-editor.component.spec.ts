import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthEditorComponent } from './month-editor.component';

describe('MonthEditorComponent', () => {
  let component: MonthEditorComponent;
  let fixture: ComponentFixture<MonthEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
