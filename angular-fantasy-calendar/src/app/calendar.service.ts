import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TotalSettings } from './totalSettings';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {

  private calenderSettingsURL = 'api/defaultSettings';

  constructor(
    private http: HttpClient
    ) { }

  requestCalendar(): Observable<TotalSettings> {
    return this.http.get<TotalSettings>(this.calenderSettingsURL);
  }
}
