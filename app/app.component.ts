import { Component, OnInit } from '@angular/core';
import { CounterComponent } from './counter.component';
import { CounterService, counterOptions, counterData } from './counter.service';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App</h1>
  			 <countdown [time]="'10'" (onStart)="onStart($event)" (onComplete)="onComplete($event)"></countdown>
			 <countdown [time]="'20'"></countdown>`
})
export class AppComponent implements OnInit {
	private format: string;
	private time: number;
	private theme: string;
	constructor(private _counterService: CounterService) {
		var counterOptions: counterOptions = {
            theme: 'material',
			format: "hh:mm:ss",
            onStart: (counter: counterData) => {
                console.log('Toast ' + counter.timeInterval + ' has been started!');
            },
            onComplete: function(counter: counterData) {
                console.log('Toast ' + counter.timeInterval + ' has been completed!');
            }
		}
		_counterService.setCoundownOptions(counterOptions);
	}
	ngOnInit() {
		
	}
	onStart(counter: counterData) {
		console.log('counter ' + counter.timeInterval + ' has been started!');
	}
	onComplete(counter: counterData) {
		console.log('counter ' + counter.timeInterval + ' has been started!');
	}
}
