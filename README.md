# Tyk Custom Dashboard
This dashboard presents Tyk API list with information such as API name, associated policies and key information. This will user Tyk REST API as well as Dashboard API to retrieve data.

![alt dashboard1](https://raw.githubusercontent.com/scorpio23/tyk-ops-portal/master/documentation/1.png)
![alt dashboard2](https://raw.githubusercontent.com/scorpio23/tyk-ops-portal/master/documentation/2.png)
![alt policies](https://raw.githubusercontent.com/scorpio23/tyk-ops-portal/master/documentation/3.png)
![alt policies2](https://raw.githubusercontent.com/scorpio23/tyk-ops-portal/master/documentation/4.png)

### Running Locally
Versions
```sh
Angular CLI: 8.3.20
Node: 10.15.3
OS: darwin x64
Angular: 8.2.14
npm: 6.4.1
@angular-devkit/architect         0.803.20
@angular-devkit/build-angular     0.803.20
@angular-devkit/build-optimizer   0.803.20
@angular-devkit/build-webpack     0.803.20
@angular-devkit/core              8.3.20
@angular-devkit/schematics        8.3.20
@angular/cli                      8.3.20
@ngtools/webpack                  8.3.20
@schematics/angular               8.3.20
@schematics/update                0.803.20
rxjs                              6.4.0
typescript                        3.5.3
webpack                           4.39.2
```
Angular Setup: https://angular.io/guide/setup-local
```sh
npm install -g @angular/cli
```
## Serve
```sh
    npm install
    ng serve
```
Project will run on http://localhost:4200

## Handle CORS in local setup
Check src/proxy.conf.json and angular.json for configurations.
https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md
```sh
"architect": {
  "serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
      "browserTarget": "your-application-name:build",
      "proxyConfig": "src/proxy.conf.json"
    }
```
# !Important!
Rename the REST endpoints URL in /services/tyk-api.service.ts as when doing prod deployment. And keys also :D
https://github.com/scorpio23/tyk-ops-portal/blob/master/src/app/services/tyk-api.service.ts

## Local Build
```sh
    ng build
```
## Production Build
```sh
    ng build --prod
```
Final files can be seen in /dist folder. Place them in a server or suitable hosting solution.
