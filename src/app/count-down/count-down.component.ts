import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { CountDownService, countdownOptions, countdownData } from '../services/count-down.service';

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
  private countdown: countdownData;
  private date: string = "DateTime-COuntDown";
  @Input() time: number;
  @Output() onStart = new EventEmitter<string>();
  @Output() onComplete = new EventEmitter<string>();
  @Input() object: any;
	@Input() singleFormat : string;
  constructor() {}
  ngOnInit() {
    this.countdown= "blueWhale";
    console.log(this.countdown);
  }

  isFunction(obj: any) {
    return typeof obj === "function";
  }

  startCountDown () {}

}
