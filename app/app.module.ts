import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { CountdownComponent } from './countdown.component';
import { CountdownService } from './countdown.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CountdownComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ CountdownService ]
})

export class AppModule { }