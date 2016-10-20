import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

export interface counterOptions {
  theme?: string;
  format?: string;
  onStart?: Function;
  onComplete?: Function;
}

export interface counterData {
    timeInterval: number;
    theme: string;
    format: string;
    onStart: Function;
    onComplete: Function;
}

@Injectable()
export class CounterService {
    
    static THEMES: Array<string> = ['default', 'material', 'bootstrap'];
    private uniqueCounter: number = 0;
    private counterOptions: counterOptions;

    constructor() {
        this.counterOptions = {
            theme: "default",
            format: "hh : mm : ss"
        }
    }

    setCoundownOptions(options: counterOptions) {
        let counterOptions: counterOptions;
        counterOptions = options;
        counterOptions = counterOptions || {
            theme: "default",
            format: "hh : mm : ss"
        };
        let theme: string;
        if (counterOptions.theme) {
            theme = CounterService.THEMES.indexOf(counterOptions.theme) > -1 ? counterOptions.theme : "defult";
        } else {
            theme = "default";
        }

        let format: string;
        if (!counterOptions.format) {
            format = "hh : mm : ss"
        }
        else {
            format = counterOptions.format;
        }
        this.counterOptions =  counterOptions;
    }
    getCountdwnOptions() {
        return this.counterOptions;
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