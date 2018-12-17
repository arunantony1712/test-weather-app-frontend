import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CityWeather, WeatherForecastService } from 'src/app/services/weather-forecast/weather-forecast-service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit, OnDestroy {

  weatherForcast: CityWeather[];
  selectedWeather: CityWeather;
  private cityName: string;
  private sub: any;

  constructor(private weatherService: WeatherForecastService, private route: ActivatedRoute) {
    this.weatherService.weatherForcastPromise.then(() => {
      this.weatherForcast = this.weatherService.getWeatherForcast();
    });
    this.weatherService.citySelected.subscribe(() => {
      this.changeSelectedWeather();
    });
  }

  ngOnInit() {
    this.route.params.subscribe( params =>
      {
        this.cityName =  params['cityName'];
        this.weatherService.getCityWeatherForNext5Days(this.cityName);
      }
    );
  }

  changeSelectedWeather () {
    const selectedIndx = this.weatherForcast.findIndex((weather) => (weather.selected === true));
    if (selectedIndx !== -1) {
      this.selectedWeather = this.weatherForcast[selectedIndx];
    }
  }

  ngOnDestroy () {
    this.sub.unsubscribe();
  }

}