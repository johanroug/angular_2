import { LogService } from './service/log.service';
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { ServiceComponent } from "./service/service.component";
import { CmpAComponent } from "./service/cmp-a.component";
import { CmpBComponent } from "./service/cmp-b.component";
import { HttpComponent } from './http/http.component';

@NgModule({
    declarations: [
        AppComponent,
        ServiceComponent,
        CmpAComponent,
        CmpBComponent,
        HttpComponent
    ],
    imports: [BrowserModule],
    providers: [LogService],
    bootstrap: [AppComponent]
})
export class AppModule {}
