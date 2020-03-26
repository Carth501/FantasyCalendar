import { Component } from '@angular/core';
import { MOCK_MONTH } from './Mock-Month';
import { MOCK_EVENTS } from './Mock-Events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fantasy Calendar';
  SAMPLE_MONTH = MOCK_MONTH;
  SAMPLE_EVENTS = MOCK_EVENTS;
}
