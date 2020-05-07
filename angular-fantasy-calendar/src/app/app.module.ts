import { ClipboardModule } from '@angular/cdk/clipboard';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DayComponent } from './components/day/day.component';
import { EventComponent } from './components/event/event.component';
import { InMemoryDataService } from './in-memory-data.service';
import { MonthComponent } from './components/month/month.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { OptionsComponent } from './components/options/options.component';
import { ViewComponent } from './components/view/view.component';
import { WeekComponent } from './components/week/week.component';
import { YearComponent } from './components/year/year.component';
import { CyclicalFieldsComponent } from './event field components/cyclical-fields/cyclical-fields.component';
import { YearlyFieldsComponent } from './event field components/yearly-fields/yearly-fields.component';
import { MonthlyFieldsComponent } from './event field components/monthly-fields/monthly-fields.component';
import { WeeklyFieldsComponent } from './event field components/weekly-fields/weekly-fields.component';
import { MonthDOWFieldsComponent } from './event field components/month-dow-fields/month-dow-fields.component';
import { YearMonthDowFieldsComponent } from './event field components/year-month-dow-fields/year-month-dow-fields.component';
import { UniqueFieldsComponent } from './event field components/unique-fields/unique-fields.component';
import { YearMonthlyFieldsComponent } from './event field components/year-monthly-fields/year-monthly-fields.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as viewReducer from './store/reducers/view.reducer';



@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    MonthComponent,
    OptionsComponent,
    ViewComponent,
    WeekComponent,
    YearComponent,
    NewEventComponent,
    EventComponent,
    CyclicalFieldsComponent,
    YearlyFieldsComponent,
    MonthlyFieldsComponent,
    WeeklyFieldsComponent,
    MonthDOWFieldsComponent,
    YearMonthDowFieldsComponent,
    UniqueFieldsComponent,
    YearMonthlyFieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    BrowserAnimationsModule,
    ClipboardModule,
    MatSelectModule,
    MatInputModule,
    StoreModule.forRoot({ view: viewReducer.reducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
