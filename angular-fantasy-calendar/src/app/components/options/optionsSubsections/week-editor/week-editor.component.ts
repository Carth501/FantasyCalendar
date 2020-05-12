import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-week-editor',
  templateUrl: './week-editor.component.html',
  styleUrls: ['./week-editor.component.css']
})
export class WeekEditorComponent implements OnInit {

  @Input() DoW_names: string[];
  @Input() newDoWName: string;
  daysPerWeek;

  constructor() { }

  ngOnInit(): void {
  }

  addDoW(): void {
    this.DoW_names.push(this.newDoWName);
    this.newDoWName = '';
  }

  deleteDoW(index: number): void {
    if (index >= 0) {
      this.DoW_names.splice(index, 1);
      this.daysPerWeek = this.DoW_names.length;
    }
  }

  trackArray(index, item) {
    return index;
  }

}
