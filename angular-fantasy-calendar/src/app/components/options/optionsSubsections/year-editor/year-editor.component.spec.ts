import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearEditorComponent } from './year-editor.component';

describe('YearEditorComponent', () => {
  let component: YearEditorComponent;
  let fixture: ComponentFixture<YearEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
