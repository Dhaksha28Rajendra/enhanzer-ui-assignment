import { Routes } from '@angular/router';
import { PurchaseList } from './pages/purchase-list/purchase-list';
import { PurchaseDetails } from './pages/purchase-details/purchase-details';

export const routes: Routes = [
  { path: '', component: PurchaseList },
  { path: 'details', component: PurchaseDetails }
];