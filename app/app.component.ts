import { Component, OnInit } from '@angular/core';
import { CountdownComponent } from './countdown.component';
import { CountdownService, countdownOptions, countdownData } from './countdown.service';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App</h1>
  			 <countdown [time]="'10'" [object]="'1'" (onStart)="onStart($event)" (onComplete)="onComplete($event)"></countdown>
			 <countdown [time]="'20'" [object]="'2'" ></countdown>`
})
export class AppComponent implements OnInit {
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
	ngOnInit() {
		
	}
	onStart(countdown: countdownData) {
		console.log('countdown ' + countdown.object + ' has been started!');
	}
	onComplete(countdown: countdownData) {
		console.log('countdown ' + countdown.object + ' has been started!');
	}
}
