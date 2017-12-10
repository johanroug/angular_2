import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HouseComponent } from './house.component';

const houseRoutes: Routes = [
  { path: '', component: HouseComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(houseRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HouseRoutingModule {}
