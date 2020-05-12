import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  @Input() jsonSave: string;

  @Input() fromjson: string;
  @Output() readNewjson = new EventEmitter<string>();

  constructor(
    private clipboard: Clipboard) { }

  ngOnInit(): void {
  }
  // this.jsonSave = JSON.stringify(this.totalSettingsObject);

  clipboardJSON(): void {
    const pending = this.clipboard.beginCopy(this.jsonSave);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
      } else {
        // Remember to destroy when you're done!
        pending.destroy();
      }
    };
    attempt();
  }

  newUserJSON(): void {
    this.readNewjson.emit(this.fromjson);
  }
}
