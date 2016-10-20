import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { CounterComponent } from './counter.component';
import { CounterService } from './counter.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CounterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ CounterService ]
})

export class AppModule { }