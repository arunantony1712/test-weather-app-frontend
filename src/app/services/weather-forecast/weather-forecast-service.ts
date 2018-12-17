import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

export interface CityWeather {
    cityName: string;
    temperatureNow: number;
    forCast: number[];
    selected: boolean;
}

@Injectable({
    providedIn: "root"
})
export class WeatherForecastService {
    private weatherForcast: CityWeather[] = [];
    public weatherForcastPromise: Promise<CityWeather[]>;
    public citySelected: Subject<void> = new Subject();
    
    constructor () {
        this.weatherForcastPromise = new Promise((resolve, reject) => {
            const initialForcast = [
                {cityName : 'Sydney', temperatureNow: 22, forCast: [], selected: false},
                {cityName : 'Amsterdam', temperatureNow: 2, forCast: [], selected: false},
            ];
            resolve(initialForcast);
        });
        
        this.weatherForcastPromise.then((data: CityWeather[]) => {
            this.weatherForcast = data;
        });
    }

    getWeatherForcast () {
        return this.weatherForcast;
    }

    getCityWeatherForNext5Days (name: string) {
        
        const ind = this.weatherForcast.findIndex((weather) => (weather.cityName === name));

        if (ind !== -1) {
            const selectedIndx = this.weatherForcast.findIndex((weather) => (weather.selected === true));
            if (selectedIndx !== -1) {
                this.weatherForcast[selectedIndx].selected = false;
            }
            this.weatherForcast[ind].selected = true;
            this.weatherForcast[ind].forCast = [12, 7, -5, 0];;
            this.citySelected.next();
        }
    }
}