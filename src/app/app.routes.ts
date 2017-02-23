import { MarketComponent } from './components/market/market.component';
import { CollectionComponent } from './components/collection/collection.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/collection', pathMatch: 'full' },
  { path: 'collection', component: CollectionComponent },
  { path: 'market', component: MarketComponent }
];

export const routing = RouterModule.forRoot(routes);