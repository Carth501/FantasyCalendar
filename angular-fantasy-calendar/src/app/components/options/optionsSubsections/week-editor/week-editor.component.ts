import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-week-editor',
  templateUrl: './week-editor.component.html',
  styleUrls: ['./week-editor.component.css']
})
export class WeekEditorComponent implements OnInit {

  @Input() DoW: string[];
  @Input() newDoWName: string;
  daysPerWeek;

  constructor() { }

  ngOnInit(): void {
  }

  addDoW(): void {
    this.DoW.push(this.newDoWName);
    this.newDoWName = '';
  }

  deleteDoW(index: number): void {
    if (index >= 0) {
      this.DoW.splice(index, 1);
      this.daysPerWeek = this.DoW.length;
    }
  }

  trackArray(index, item) {
    return index;
  }

}
