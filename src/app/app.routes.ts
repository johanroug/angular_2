import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home.component";
import {AboutComponent} from "./components/about.component";
import {ContactComponent} from "./components/contact.component";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' }
];

export const routing = RouterModule.forRoot(routes);
