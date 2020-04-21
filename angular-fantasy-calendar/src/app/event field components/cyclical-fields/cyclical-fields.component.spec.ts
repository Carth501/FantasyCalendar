import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclicalFieldsComponent } from './cyclical-fields.component';

describe('CyclicalFieldsComponent', () => {
  let component: CyclicalFieldsComponent;
  let fixture: ComponentFixture<CyclicalFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclicalFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclicalFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
