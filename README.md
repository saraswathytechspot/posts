# Display Posts

As a user, I should be able to see list of 100 posts.

## Functional Requirements:

As a user I should be able to:

- Render all posts where each post in a separate component and show them as squares, 10 rows x 10 columns
- By default, show the post id
- When clicking on a square: replace the id with the userId
- When clicking again show the id

### Branch withState - Updated Post Services to handle all data rendering part. ###
Updated files:

- app\services\posts.service.ts
- app\components\posts.component.ts

# Posts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
