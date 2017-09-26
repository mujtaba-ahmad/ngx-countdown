import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { CountDownComponent } from './count-down/count-down.component';
// import { CountDownService } from './services/count-down.service';
import { CountDownModule } from "./modules/count-down/count-down.module";

@NgModule({
  declarations: [
    AppComponent
    // CountDownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CountDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
