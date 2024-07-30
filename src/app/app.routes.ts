import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: BudgetDetailComponent },
  { path: '**', component: Error404Component },
];
