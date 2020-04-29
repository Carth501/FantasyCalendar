import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TotalSettings } from './totalSettings';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {

  constructor(
    private http: HttpClient
    ) { }

  requestCalendar(calenderSettingsURL: string): Observable<TotalSettings[]> {
    return this.http.get<TotalSettings[]>(calenderSettingsURL);
  }
}
