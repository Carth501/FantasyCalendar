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
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { EventComponent } from './event/event.component';
import { InMemoryDataService } from './in-memory-data.service';
import { MonthComponent } from './month/month.component';
import { NewEventComponent } from './new-event/new-event.component';
import { OptionsComponent } from './options/options.component';
import { ViewComponent } from './view/view.component';
import { WeekComponent } from './week/week.component';
import { YearComponent } from './year/year.component';
import { CyclicalFieldsComponent } from './event field components/cyclical-fields/cyclical-fields.component';
import { YearlyFieldsComponent } from './event field components/yearly-fields/yearly-fields.component';
import { MonthlyFieldsComponent } from './event field components/monthly-fields/monthly-fields.component';
import { WeeklyFieldsComponent } from './event field components/weekly-fields/weekly-fields.component';
import { MonthDOWFieldsComponent } from './event field components/month-dow-fields/month-dow-fields.component';
import { YearMonthDowFieldsComponent } from './event field components/year-month-dow-fields/year-month-dow-fields.component';
import { UniqueFieldsComponent } from './event field components/unique-fields/unique-fields.component';
import { YearMonthlyFieldsComponent } from './event field components/year-monthly-fields/year-monthly-fields.component';
import {MatSelectModule} from '@angular/material/select';



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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
