import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: UserComponent }
    ])
  ],
  declarations: [
    UserComponent
  ],
  exports: [RouterModule]
})
export class UserModule {}
