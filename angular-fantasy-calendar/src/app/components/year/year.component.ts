import { Component, Input } from '@angular/core';
import { Year } from '../../year';


@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent {
  @Input() year: Year;

  constructor() { }

}
