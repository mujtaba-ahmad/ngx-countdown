import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownComponent } from './count-down.component';
import { CountDownService } from '../services/count-down.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CountDownComponent],
  exports: [
    CountDownComponent
  ],
  providers: [CountDownService]
})
export class CountDownModule { }
