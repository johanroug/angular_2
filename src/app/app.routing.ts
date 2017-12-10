import { Routes, RouterModule } 		from '@angular/router';
import { InvoiceDetailComponent } 	from './components/application/invoices/invoice-detail/invoice-detail.component';
import { InvoicesComponent } 				from './components/application/invoices/invoices.component';

const APP_ROUTES: Routes = [
  {path: "logout", component: InvoicesComponent},

  {path: "invoices", component: InvoicesComponent},
  {path: "invoices/:id", component: InvoiceDetailComponent},

  {path: "", redirectTo: "invoices", pathMatch: "full"},
  { path: '**', redirectTo: "invoices", pathMatch: "full" }
];

export const routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
