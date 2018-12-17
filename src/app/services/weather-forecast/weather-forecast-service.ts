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
            fetch(
                    'https://nx3zxr5sc4.execute-api.us-east-2.amazonaws.com/test/test-db-connection',
                    {
                        method: 'GET',
                    }
                )
                .then((res) => res.json())
                .then((jsonRes) =>  {
                    // Ex: [{cityName : 'Sydney', temperatureNow: 22, forCast: [], selected: false}]
                    const initialForcast = Array.isArray(jsonRes) && 
                    jsonRes.map((item) => ({...item, forCast: [], selected: false}));
                    resolve(initialForcast);
                }).catch((err) => {
                    // todo: properly handled using a common log service
                    console.log(err);
                });
        });
        
        this.weatherForcastPromise.then((data: CityWeather[]) => {
            this.weatherForcast = data;
        });
    }

    getWeatherForcast () {
        return this.weatherForcast;
    }

    getCityWeatherForNext5Days (name: string) {
        fetch(
                'https://nx3zxr5sc4.execute-api.us-east-2.amazonaws.com/test/test-db-connection',
                {
                    method: 'POST',
                    body: JSON.stringify({city: name})
                }
            )
            .then((res) => res.json())
            .then((jsonRes) =>  {
                const ind = this.weatherForcast.findIndex((weather) => (weather.cityName === name));

                if (ind !== -1) {
                    const selectedIndx = this.weatherForcast.findIndex((weather) => (weather.selected === true));
                    if (selectedIndx !== -1) {
                        this.weatherForcast[selectedIndx].selected = false;
                    }
                    this.weatherForcast[ind].selected = true;
                    // Ex: [12, 7, -5, 0];
                    this.weatherForcast[ind].forCast = Array.isArray(jsonRes) && jsonRes;
                    this.citySelected.next();
                }
            }).catch((err) => {
                // todo: properly handled using a common log service
                console.log(err);
            });
    }
}