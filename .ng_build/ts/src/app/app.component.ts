import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-count-down [time]="'10'" [object]="'2'"></app-count-down>
    <!-- <app-count-down [time]="'10'" [object]="'2'" [singleFormat]="'hh-mm-ss'" (onStart)="onStart($event)" [selectedtheme]="'default'"></app-count-down> -->
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'app';
  // onStart(h){
  //   console.log(h);
  // }
}
