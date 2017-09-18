import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  private countdown: string = "count-down";
  private date: string = "DateTime-COuntDown"
  constructor() { }

  ngOnInit() {
  }

}
