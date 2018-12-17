# TestWeatherAppFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0-rc.0.

# Functionalities of the app

- This is a simple app which displays few European cities and their respective at-present temperatures.
(the list of cities and temperature is fetched from api on app initial load).

- User have option to click on these cities and the app make rest call to retrieve the weather forecast of next five days.

# App structure
-   please find below the new components and services are added <br>

    |--src <br>
     &nbsp;&nbsp;|--app <br> 
             &nbsp;&nbsp; &nbsp;&nbsp;|--services     `services used in through out the app` <br>
             &nbsp;&nbsp; &nbsp;&nbsp;|--app-components       `those angular components that are dependent to the application` <br>
             &nbsp;&nbsp; &nbsp;&nbsp;|--shared-component     `reusable components, which are independent. component interaction is done via @Input and @Output attributes.` <br>


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
