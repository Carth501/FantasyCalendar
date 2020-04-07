import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { InMemoryDataService } from './in-memory-data.service';
import { MonthComponent } from './month/month.component';
import { OptionsComponent } from './options/options.component';
import { ViewComponent } from './view/view.component';
import { WeekComponent } from './week/week.component';
import { YearComponent } from './year/year.component';



@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    MonthComponent,
    OptionsComponent,
    ViewComponent,
    WeekComponent,
    YearComponent
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
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
