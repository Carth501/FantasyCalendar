import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBubblesComponent } from './event-bubbles.component';

describe('EventBubblesComponent', () => {
  let component: EventBubblesComponent;
  let fixture: ComponentFixture<EventBubblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBubblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBubblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
