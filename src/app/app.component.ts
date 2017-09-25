import { Component } from '@angular/core';
import { CountDownService, ICountdownOptions, ICountdownData } from './services/count-down.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _countdownservice: CountDownService)
  {
    // let countdownOptions: ICountdownOptions = {
    //   theme: 'material',
    //   format: 'hh: mm: ss',
    //   onStart: (countdown: ICountdownData) => {
    //     console.log('count ' + countdown.timeInterval + ' has been started!');
    //   },
    //   onComplete: function(countdown: ICountdownData) {
    //     console.log('count ' + countdown.timeInterval + ' has been completed!');
    //   }
    // }
    // _countdownservice.setCoundownOptions(countdownOptions);
  }
  // onStart(h){
  //   console.log(h);
  // }
}
