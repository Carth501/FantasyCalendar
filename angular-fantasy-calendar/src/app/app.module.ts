import { ClipboardModule } from '@angular/cdk/clipboard';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DayComponent } from './components/day/day.component';
import { EventComponent } from './components/event/event.component';
// import { InMemoryDataService } from './in-memory-data.service';
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
import {MatButtonModule} from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as viewReducer from './store/reducers/view.reducer';
import * as optionsReducer from './store/reducers/options.reducer';
import * as calendarReducer from './store/reducers/calendar.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CalendarEffects } from './store/effects/calendar.effects';
import { YearEditorComponent } from './components/options/optionsSubsections/year-editor/year-editor.component';
import { MonthEditorComponent } from './components/options/optionsSubsections/month-editor/month-editor.component';
import { WeekEditorComponent } from './components/options/optionsSubsections/week-editor/week-editor.component';
import { LeapYearEditorComponent } from './components/options/optionsSubsections/leap-year-editor/leap-year-editor.component';
import { EventsEditorComponent } from './components/options/optionsSubsections/events-editor/events-editor.component';
import { JsonComponent } from './components/options/optionsSubsections/json/json.component';
import { CalendarSelectorComponent } from './components/calendar-selector/calendar-selector.component';
import { OptionsEffects } from './store/effects/options.effects';
import { NewEraComponent } from './components/options/optionsSubsections/new-era/new-era.component';
import { NewLeapYearRuleComponent } from './components/options/optionsSubsections/new-leap-year-rule/new-leap-year-rule.component';
import { NewCalendarComponent } from './new-calendar/new-calendar.component';
import { FiltersComponent } from './components/filters/filters.component';



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
    YearMonthlyFieldsComponent,
    YearEditorComponent,
    MonthEditorComponent,
    WeekEditorComponent,
    LeapYearEditorComponent,
    EventsEditorComponent,
    JsonComponent,
    CalendarSelectorComponent,
    NewEraComponent,
    NewLeapYearRuleComponent,
    NewCalendarComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,

    /*
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    */

    BrowserAnimationsModule,
    ClipboardModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    StoreModule.forRoot(
      {
        view: viewReducer.reducer,
        calendar: calendarReducer.reducer,
        options: optionsReducer.reducer },
      {}
      ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([CalendarEffects, OptionsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
