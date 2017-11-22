import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { CountDownService, ICountdownOptions, ICountdownData } from '../services/count-down.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  private format: string;
  private finishTime: number;
  private timer: any;
	private theme: string;
  public countdown: ICountdownData;
  public date: string = " - ";
  @Input() time: number;
  @Output() onStart = new EventEmitter<string>();
  @Output() onComplete = new EventEmitter<string>();
  @Input() object: any;
	@Input() singleFormat: string;
  @Input() selectedtheme: string = "default";
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
      theme:      this.selectedtheme + '-countdown-timer' || countdownOptions.theme + '-countdown-timer',
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
