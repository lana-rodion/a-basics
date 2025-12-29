# A-basics

This is an Angular training project to improve understanding of the framework's principles such as components, services, routing, data binding, signals, styles, etc.

## Angular CLI

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version **21.0.4**.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Add and configure JSON server

[JSON Server](https://www.npmjs.com/package/json-server) is an open source tool used to create mock REST APIs.

1. Install json-server from npm by using the following command.

```bash
npm install -g json-server
```

2. The version "1.0.0-beta.3" of json-server trnsform ID number `{"id": 1}` in a string `{"id": "1"}`.
3. So after I downgraded from "1.0.0-beta.3" to "^0.17.4", the problem was solved.
4. If you need to have IDs as a number, install `npm install -g json-server@0.17.4`
5. In the root directory of your project, create a file called `db.json`.
6. This is where you will store the data for the json-server.
7. Test your your configuration. From the command line, at the root of your project run the following commands.

```bash
json-server --watch db.json
```

8. In your web browser, navigate to the [http://localhost:3000/name-of-data-stored] and confirm that the response includes the data stored in db.json.

Index:
http://localhost:3000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:3000/name-of-data-stored

## Update service to use web server instead of local array

The data source has been configured, the next step is to update your web app to connect to it use the data.

1. Update the code to remove housingLocationList property and the array containing the data.
2. Add a string property called `url` and set its value to 'http://localhost:3000/locations'

`url = 'http://localhost:3000/locations';`

3. Update the `getAllHousingLocations` function to make a call to the web server you configured.
4. Update the components to use asynchronous calls to the housing service
5. Note: This lesson relies on the fetch browser API. For the support of interceptors, please refer to the [Http Client documentation](https://angular.dev/guide/http)

## Running Angular Application and JSON-Server With Same Startup Script

`"start": "json-server db.json & ng serve --no-hmr"`

## Command in terminal to running application with JSON-Server

`npm run start`

## Editor and Workbench Custom ScrollbarSize and Colors

You can find it in .vscode/ settings.json
