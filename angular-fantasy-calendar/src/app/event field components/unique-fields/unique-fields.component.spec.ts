import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueFieldsComponent } from './unique-fields.component';

describe('UniqueFieldsComponent', () => {
  let component: UniqueFieldsComponent;
  let fixture: ComponentFixture<UniqueFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
