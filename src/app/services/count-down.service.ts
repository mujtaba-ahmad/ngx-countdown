import { Injectable } from '@angular/core';

export interface countdownOptions {
  theme?: string;
  format?: string;
  onStart?: Function;
  onComplete?: Function;
}

export interface countdownData {
  timeInterval: number;
  theme: string;
  format: string;
  object: any;
  onStart: Function;
  onComplete: Function;
}

export class CountDownService {

}
