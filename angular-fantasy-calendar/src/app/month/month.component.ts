import { Component, Input } from '@angular/core';
import { Month } from '../month';


@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent {
  @Input() month: Month;

}
