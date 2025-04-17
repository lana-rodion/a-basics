import { Routes } from '@angular/router';
import { GetValueComponent } from './components/get-value/get-value.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { LocationManagementComponent } from './components/location-management/location-management.component';
import { LocationDashboardComponent } from './components/location-dashboard/location-dashboard.component';

export const routeConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: LocationDashboardComponent,
    title: 'Dashboard',
  },
  { path: 'home', component: HomeComponent, title: 'Home page' },
  { path: 'details/:id', component: DetailsComponent, title: 'Details page' },
  { path: 'get-value', component: GetValueComponent, title: 'Get Value' },
];
