# ng2-countdown (Angular2 Countdown)
Angular2 contdown is complatible with latest release of angular 2.x.x.

## Functionality
1. I can be applied anywhere in your web application.
2. Given the time in seconds and time format, it start countdown in that format.
3. Bootstrap and angular theme available, or you could use defauld theme and could style it accordingly.
4. It also shows 2 callback functions OnStart and onComplete, one calls when condown starts and other when countdown stops.

## Usage
Follow these steps:

### 1. Update your `systemjs.config.js` file.
Add following line in map:

```js
map: {
      //...
      'ng2-countdown': 'npm:ng2-countdown'
     }
```
-and in packages:

```js
packages: {
      //...
      'ng2-countdown': {
        main: './index.js',
        defaultExtension: 'js'
      }
```


### 2. Update the index.html

- Import style into your index.html.
  - `node_module/ng2-countdown/app/assets/css/style.css` - Contains the styling of countdown.
  Please copy that and paste that in your assets folder and include in your index.html file, or could link this css file         directly in you index.html by giving path of style.css file present in node_modules/ng-countdown/app/assets/css/style.css
  

### 3. Import the `Component` and `service`
Import Components in the NgModule of your application as shown below:

```ts
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from '@angular/core';
import {ToasterComponent, ToastComponent, ToasterAppComponent} from 'ng2-coundown/index';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [CountdownComponent],
    bootstrap: [AppComponent],
    providers: [ CountdownService ]
})
export class AppModule {
}
```
Adding this sevice in ngModule make it accessible in whole project. and mainly it service we were setting countdown configration so making it signleton by adding it in main module will help.

### 4 Set `CountdownOptions` for you application
Now we need to set countdownOptions like theme, time format, onStart callback and onComplete callback. in our main Component like AppComponent in my case.
  - format supported
  	-All formats uptill days. for example hh:mm:ss, h:m:s etc
If you use onStart and onComplete callback here they will be generic and will be called on start and on complete of countdown. and will return countdown object. Will explain countdown object in a while.

you should call setCoundownOptions() function and pass countdownOptions object as parameter in setCoundownOptions(countdownOptions). Else countdownOptions wont appear.

Please review below code.
```ts
import { CountdownService, countdownOptions, countdownData } from 'ng2-coundown/index';
@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App</h1>`
})
export class AppComponent {
	constructor(private _countdownService: CountdownService) {
		var countdownOptions: countdownOptions = {
            theme: 'material',
			format: "hh:mm:ss",
            onStart: (countdown: countdownData) => {
                console.log('count ' + countdown.timeInterval + ' has been started!');
            },
            onComplete: function(countdown: countdownData) {
                console.log('count ' + countdown.timeInterval + ' has been completed!');
            }
		}
		_countdownService.setCoundownOptions(countdownOptions);
	}
}
```
### 5 Use `CountdownComponent` and `CountdownService` in your application
Now CountdownOptions are properly configure and set,we could user countdown anywhere in our app, like in below code i am using it in my main component after configuring countdownOptions.

Please review below code.
```ts
import { CountdownComponent, CountdownService, countdownOptions, countdownData } from 'ng2-coundown/index';
@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App</h1>
  			 <countdown [time]="'10'" [object]="'1'" (onStart)="onStart($event)" (onComplete)="onComplete($event)"></countdown>
			 <countdown [time]="'20'" [object]="'2'" ></countdown>`
})
export class AppComponent {
	private format: string;
	private time: number;
	private theme: string;
	constructor(private _countdownService: CountdownService) {
		var countdownOptions: countdownOptions = {
            theme: 'material',
			format: "hh:mm:ss",
            onStart: (countdown: countdownData) => {
                console.log('count ' + countdown.timeInterval + ' has been started!');
            },
            onComplete: function(countdown: countdownData) {
                console.log('count ' + countdown.timeInterval + ' has been completed!');
            }
		}
		_countdownService.setCoundownOptions(countdownOptions);
	}
	onStart(countdown: countdownData) {
		console.log('countdown ' + countdown.object + ' has been started!');
	}
	onComplete(countdown: countdownData) {
		console.log('countdown ' + countdown.object + ' has been started!');
	}
}

```
Above code will show two countdowns. first with 10 seconds and second with 20 seconds.
You could define onStart and  onComplete events on every countdown element, and it will run as well when counter starts or completes. Inorder if anyone want to perform anything when counter ends. And they are independent of each other, Every counter have its on events.


# License
 [MIT](/LICENSE)
