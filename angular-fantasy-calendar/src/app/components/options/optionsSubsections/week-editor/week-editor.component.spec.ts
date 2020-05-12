import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekEditorComponent } from './week-editor.component';

describe('WeekEditorComponent', () => {
  let component: WeekEditorComponent;
  let fixture: ComponentFixture<WeekEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
