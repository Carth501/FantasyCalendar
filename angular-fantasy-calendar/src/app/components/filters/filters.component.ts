import { Component, Input, } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActions from '../../store/actions';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {


  @Input() filter: string[];
  @Input() tagList: string[];

  constructor(
    private store: Store,
  ) {
  }
 
   toggleTagFilter(tag: string): void {
     const index = this.filter.indexOf(tag);
     if (index === -1) {
       this.filter.push(tag);
       this.store.dispatch(fromActions.CalendarActions.changeFilter({newFilter: this.filter}));
     } else {
       this.filter.splice(index, 1);
       this.store.dispatch(fromActions.CalendarActions.changeFilter({newFilter: this.filter}));
     }
   }
}
