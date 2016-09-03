import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { JohanComponent } from "./johan.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, JohanComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
