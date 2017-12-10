import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HouseComponent } from './house.component';
import { HouseRoutingModule } from './house.routing.module';

@NgModule({
  imports: [
    CommonModule,
    HouseRoutingModule
  ],
  declarations: [
    HouseComponent
  ],
  providers: [ ]
})
export class HouseModule {}