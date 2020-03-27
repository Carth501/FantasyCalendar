import { Component, OnInit } from '@angular/core';
import { MOCK_EVENTS } from './Mock-Events';
import { DefaultDaysOfTheWeek } from './models/days-of-the-week';
import { MonthComponent } from './month/month.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Fantasy Calendar';
  SAMPLE_EVENTS = MOCK_EVENTS;

}
