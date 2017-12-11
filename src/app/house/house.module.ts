import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HouseComponent } from './house.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: HouseComponent }
    ]),
    CommonModule
  ],
  declarations: [
    HouseComponent
  ],
  providers: [ ],
  exports: [
    RouterModule
  ]
})
export class HouseModule {}
