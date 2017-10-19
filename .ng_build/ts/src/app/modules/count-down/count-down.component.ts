import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { CountDownService, ICountdownOptions, ICountdownData } from '../services/count-down.service';

@Component({
  selector: 'app-count-down',
  template: `
    <div [ngClass]="countdown.theme">   <!--countdown.theme -->
      <span class="timer">{{date}}</span>
    </div>
  `,
  styles: [`
    .default-countdown-timer{
      border: 1px solid #ddd;
      color: #3c763d;
      background-color: transparent;
      padding: 10px 15px;
      margin-bottom: 20px;
      border-radius: 4px;
      display: inline-block;
    }
    .bootstrap-countdown-timer {
      color: #3c763d;
      background-color: #dff0d8;
      border-color: #d6e9c6;
      padding: 10px 15px;
      margin-bottom: 20px;
      border: 1px solid #d6e9c6;
      border-radius: 4px;
      display: inline-block;
    }
    .material-countdown-timer{
      color: #3c763d;
      background-color: #dff0d8;
      border-color: #d6e9c6;
      padding: 10px 15px;
      margin-bottom: 20px;
      border: 1px solid transparent;
      border-radius: 0px;
      display: inline-block;
    }
  `]
})
export class CountDownComponent implements OnInit {
  private format: string;
  private finishTime: number;
  private timer: any;
	private theme: string;
  private countdown: ICountdownData;
  private date: string = " - ";
  @Input() time: number;
  @Output() onStart = new EventEmitter<string>();
  @Output() onComplete = new EventEmitter<string>();
  @Input() object: any;
	@Input() singleFormat : string;

  constructor(private _countDownService: CountDownService) {}
  ngOnInit() {
    this.startCountDown();
  }
  isFunction(data: any) {
    return typeof data === "function";
  }
  startCountDown() {
    let countdownOptions: ICountdownOptions;
    countdownOptions = this._countDownService.getdefaultCountDownOptions();
    this.countdown = {
      timeInterval: this.time,
      object:     this.object,
      format:     this.singleFormat || countdownOptions.format,
      theme:      countdownOptions.theme + '-countdown-timer',
      onStart:    countdownOptions.onStart && this.isFunction(countdownOptions.onStart) ? countdownOptions.onStart : null,
      onComplete: countdownOptions.onComplete && this.isFunction(countdownOptions.onComplete) ? countdownOptions.onComplete : null
    };
    this.onStart.emit(JSON.stringify(this.countdown));
    if (countdownOptions.onStart && this.isFunction(countdownOptions.onStart)) {
      countdownOptions.onStart.call(this, this.countdown);
    }
    this.finishTime = this.countdown.timeInterval;
    var that = this;
    this.timer = setInterval(function() {
      if (that.finishTime == 0) {
        if (countdownOptions.onComplete && that.isFunction(countdownOptions.onComplete)) {
          countdownOptions.onComplete.call(that, that.countdown);
        }
        that.onComplete.emit(that.countdown.toString());
        clearInterval(that.timer);
      }
      else {
        that.finishTime = that.finishTime - 1;
        that.date = that._countDownService.dhms(that.finishTime, that.countdown.format);
      }
    }, 1000)
  }

}
