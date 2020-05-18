import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEraComponent } from './new-era.component';

describe('NewEraComponent', () => {
  let component: NewEraComponent;
  let fixture: ComponentFixture<NewEraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
