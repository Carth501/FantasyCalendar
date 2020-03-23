import { Component } from '@angular/core';
import { MOCK_MONTH } from './Mock-Month';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fantasy Calendar';
  SAMPLE_MONTH = MOCK_MONTH;
}
