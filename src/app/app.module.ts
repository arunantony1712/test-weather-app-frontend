import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickableTileComponent } from './shared-components/clickable-tile/clickable-tile.component';
import { WeatherForecastComponent } from './app-components/weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickableTileComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
