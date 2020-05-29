import { Component, Input, } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActions from '../../store/actions';
import * as _ from 'lodash';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {


  @Input() set setTagList(tags: string[]) {
    this.tagList = _.cloneDeep(tags);
  }
  @Input() set setFilter(filter: string[]) {
    this.filter = _.cloneDeep(filter);
  }

  filter: string[];
  tagList: string[];

  constructor(
    private store: Store,
  ) {
  }

   toggleTagFilter(tag: string): void {
     console.log(tag);
     const index = this.filter.indexOf(tag);
     if (index === -1) {
       this.filter.push(tag);
     } else {
       this.filter.splice(index, 1);
     }
     const newFilter = _.cloneDeep(this.filter);
     this.store.dispatch(fromActions.CalendarActions.changeFilter({ newFilter }));
   }
}
