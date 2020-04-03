import { Component, Input } from '@angular/core';
import { Month } from '../month';

const DefaultDoWNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent {
  @Input() month: Month;
  @Input() daysOfWeek: string[] = DefaultDoWNames;
}
