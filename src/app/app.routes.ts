import { Routes } from '@angular/router';
import { GetValueComponent } from './components/get-value/get-value.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { LocationDashboardComponent } from './components/location-dashboard/location-dashboard.component';
import { UpdateLocationComponent } from './components/update-location/update-location.component';
import { CreateLocationComponent } from './components/create-location/create-location.component';
import { DashboardComponent } from './components/a-crud/dashboard/dashboard.component';
import { AddComponent } from './components/a-crud/add/add.component';
import { EditComponent } from './components/a-crud/edit/edit.component';

export const routeConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'All locations' },
  {
    path: 'locations',
    component: LocationDashboardComponent,
    title: 'Location Management',
  },
  {
    path: 'locations/create',
    component: CreateLocationComponent,
    title: 'Create new location',
  },
  {
    path: 'locations/details/:id',
    component: DetailsComponent,
    title: 'Details page',
  },
  {
    path: 'locations/details/:id/update',
    component: UpdateLocationComponent,
    title: 'Update location',
  },
  {
    path: 'employees',
    component: DashboardComponent,
    title: 'Employees List',
  },
  {
    path: 'employees/add',
    component: AddComponent,
    title: 'Add New Employee',
  },
  {
    path: 'employees/edit/:id',
    component: EditComponent,
    title: 'Edit Employee Data',
  },
  { path: 'get-value', component: GetValueComponent, title: 'Get Value' },
];
