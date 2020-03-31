import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthComponent } from './month/month.component';


const routes: Routes = [
  { path: 'calendar', component: MonthComponent },
  { path: '', redirectTo: '/calendar', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
