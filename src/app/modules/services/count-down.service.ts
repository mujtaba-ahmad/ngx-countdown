import { Injectable } from '@angular/core';

export interface ICountdownOptions {
  theme?: string;
  format?: string;
  onStart?: Function;
  onComplete?: Function;
}

export interface ICountdownData {
  timeInterval: number;
  theme: string;
  format: string;
  object: any;
  onStart: Function;
  onComplete: Function;
}

@Injectable()
export class CountDownService {

  static THEMES: Array<string> = ['default', 'material', 'bootstrap'];
  private uniquecountdown: number = 0;
  private countDownOptions: ICountdownOptions;
  constructor(){
    this.countDownOptions = {
      theme: "default",
      format: "hh : mm : ss"
    }
  }

  setCoundownOptions(options: ICountdownOptions) {
    let countdownOptions: ICountdownOptions;
    countdownOptions = options;
    countdownOptions = countdownOptions || {
      theme: "default",
      format: "hh : mm : ss"
    };
    let theme: string;
    if (countdownOptions.theme) {
      theme = CountDownService.THEMES.indexOf(countdownOptions.theme) > -1 ? countdownOptions.theme : "default";
    }else {
      theme = "default";
    }

    let format: string;
    if (!countdownOptions.format) {
      format = "hh : mm : ss"
    }
    else {
      format = countdownOptions.format;
    }
    this.countDownOptions =  countdownOptions;
  }

  getdefaultCountDownOptions(){
    return this.countDownOptions;
  }

  dhms(s, f) { // seconds, format
    var d = 0;
    var h = 0;
    var m = 0;
    switch (true) {
      case (s > 86400):
        d = Math.floor(s/86400);
        s -= d * 86400;
      case (s > 3600):
        h = Math.floor(s / 3600);
        s -= h * 3600;
      case (s > 60):
        m = Math.floor(s/60);
        s -= m * 60;
    }
    if (f != null) {
      var f = f.replace('dd', (d < 10) ? "0" + d : d);
      f = f.replace('d', d);
      f = f.replace('hh', (h < 10) ? "0" + h : h);
      f = f.replace('h', h);
      f = f.replace('mm', (m < 10) ? "0" + m : m);
      f = f.replace('m', m);
      f = f.replace('ss', (s < 10) ? "0" + s : s);
      f = f.replace('s', s);
    }
    else {
      f = d + ':' + h + ':' + m + ':' + s;
    }
    return f; // :) omg...
  }
}
