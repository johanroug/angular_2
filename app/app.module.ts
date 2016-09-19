import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';
import {PostService} from "./post.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent ], // Components
  bootstrap:    [ AppComponent ],
  providers:    [ PostService] // Services
})
export class AppModule { }
