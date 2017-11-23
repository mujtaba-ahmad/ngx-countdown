# ngx-countdown (Angular4 Countdown)
Angular 4 countdown is compatible with latest release of angular 4.x.x. Click [here](http://plugins.mashup.li/#/plugins/ngx-countdown) to open Demo App.

## Functionality
1. I can be applied anywhere in your web application.
2. Given the time in seconds and time format, it start countdown in that format.
3. Bootstrap and angular theme available, or you could use default theme and could style it accordingly.
4. It also shows 2 callback functions OnStart and onComplete, one calls when countdown starts and other when countdown stops.

## Installation
- You can manually download above dist folder and rename it to ngx-countdown and place it in node_modules folder of your application.
## Usage
Follow these steps:

### 1. Update your `app.module.ts` file.
- import CountDownModule in your app.module.ts file
```ts
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';

  import { AppComponent } from './app.component';
  import { CountDownModule } from "ngx-countdown";      <-----

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      CountDownModule           <-----
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
```
adding CountDownModule in NgModule make it accessible in whole project.

### 2. Add selector tag
```html
  <app-count-down [time]="'10'" [object]="'2'" [singleFormat]="'hh:mm:ss'"></app-count-down>
```
add above selector to any component.html file, will pops-up countdown of 10 seconds.
You can customize it further like this below
```html
<app-count-down [time]="'15'" [object]="'2'" [singleFormat]="'hh-mm-ss'" (onStart)="onStart($event)" (onComplete)="onComplete($event)" [selectedtheme]="'material'"></app-count-down>
```
- singleFormat format your timer, you can customize in whatever format you e.g. "hh:mm:ss", "hh-mm-ss" etc
- selectedtheme help to change theme. There are two themes available for now
  - default
  - material
- onStart method run when timer starts. You can use it to add functionality when timer starts. For that you have to add onStart method in component.ts file.
- onComplete method is similar to onStart method except it run when timer ends.

```ts
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'app';
    onStart(data){
      console.log(data);
    }
    onComplete(data){
      console.log(data);
    }
  }

```
Above Code will pops-up countdown of 15 seconds with 'hh-mm-ss' format, and material theme. It will call onStart method when timer starts and calls onComplete method when timer ends.

### 3 Add Multiple timers

You can add multiple timers in single component like this

```ts
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'app';
    onStart1(){
      console.log("Countdown 1 starts");
    }
    onComplete1(){
      console.log("Countdown 1 ends");
    }

    onStart2(){
      console.log("Countdown 2 starts");
    }
    onComplete2(){
      console.log("Countdown 2 ends");
    }
  }
```

```html
  <app-count-down [time]="'10'" [singleFormat]="'hh-mm-ss'" (onStart)="onStart1()" (onComplete)="onComplete1()" [selectedtheme]="'material'"></app-count-down>

  <app-count-down [time]="'20'" [singleFormat]="'hh:mm:ss'" (onStart)="onStart2()" (onComplete)="onComplete2()" [selectedtheme]="'default'"></app-count-down>
```
Above code will show two countdowns. First with 10 seconds and second with 20 seconds.
You could define onStart and  onComplete events on every countdown element, and it will run as well when counter starts or completes.


# License
 [MIT](/LICENSE)
