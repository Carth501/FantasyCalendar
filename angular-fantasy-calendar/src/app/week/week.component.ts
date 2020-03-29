import { Component, OnInit, Input } from '@angular/core';
import { Week } from '../week';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent {

  @Input() week: Week;

}
