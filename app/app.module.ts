import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';
import {ContactFormComponent} from "./contact-form.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ContactFormComponent ], // Components
  bootstrap:    [ AppComponent ],
  providers:    [ ] // Services
})
export class AppModule { }
