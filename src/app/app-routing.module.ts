import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherForecastComponent } from './app-components/weather-forecast/weather-forecast.component';

const routes: Routes = [
  { path: ':cityName', component: WeatherForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
