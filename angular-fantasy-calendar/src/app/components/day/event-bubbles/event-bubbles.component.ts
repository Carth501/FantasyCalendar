import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-bubbles',
  templateUrl: './event-bubbles.component.html',
  styleUrls: ['./event-bubbles.component.css']
})
export class EventBubblesComponent {

  @Input() eventName: string;

  constructor() {
  }
}
