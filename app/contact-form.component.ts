import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'contact-form',
    templateUrl: 'contact-form.component.html'
})
export class ContactFormComponent {
  user = {
    name: "johan",
    comment: "min kommentar",
    gender: "female"
  }
  genders = ["male", "female"]
  onSubmit(value) {
    console.log(this.user);
  }
}
