import { Routes } from '@angular/router';
import { GetValueComponent } from './components/get-value/get-value.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';

export const routeConfig: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home page' },
  { path: 'details/:id', component: DetailsComponent, title: 'Details page' },
  { path: 'get-value', component: GetValueComponent, title: 'Get Value' },
];
