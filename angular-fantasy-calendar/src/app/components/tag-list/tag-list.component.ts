import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent {

  newTag: string;
  @Input() editingMode = false;
  @Input() editingToggle = true;
  @Input() set setTags(tags: string[]) {
    this.taglist = tags;
  }
  taglist: string[];
  @Output() saveEmitter: EventEmitter<string[]> = new EventEmitter();
  constructor() { }

  addTag(): void {
    this.taglist.push(this.newTag);
    this.newTag = '';
  }

  removeTag(target: string): void {
    const index = this.taglist.indexOf(target);
    if (index >= 0) {
      this.taglist.splice(index, 1);
    }
  }

  toggleEditing(): void {
    this.editingMode = !this.editingMode;
  }
}
