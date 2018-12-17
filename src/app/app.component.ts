import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CityWeather, WeatherForecastService } from './services/weather-forecast/weather-forecast-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-weather-app';
  weatherForcast: CityWeather[];
  selectedWeather: CityWeather;

  constructor(private weatherService: WeatherForecastService, private route: Router) {
    this.weatherService.weatherForcastPromise.then(() => {
      this.weatherForcast = this.weatherService.getWeatherForcast();
    });
  }

  changeSelectedWeather (city: string) {
    const selectedIndx = this.weatherForcast.findIndex((weather) => (weather.cityName === city));
    if (selectedIndx !== -1) {
      this.selectedWeather = this.weatherForcast[selectedIndx];
    }
  }

  getWeather (city: string) {
    this.changeSelectedWeather(city);
    this.route.navigate([city]);
  }
}
