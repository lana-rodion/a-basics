import { Routes } from '@angular/router';
import { GetValueComponent } from './pages/get-value/get-value.component';
import { HomeComponent } from './pages/crud-location/home/home.component';
import { DetailsComponent } from './pages/crud-location/details/details.component';
import { LocationDashboardComponent } from './pages/crud-location/location-dashboard/location-dashboard.component';
import { UpdateLocationComponent } from './pages/crud-location/update-location/update-location.component';
import { CreateLocationComponent } from './pages/crud-location/create-location/create-location.component';
import { DashboardComponent } from './pages/a-crud/dashboard/dashboard.component';
import { AddComponent } from './pages/a-crud/add/add.component';
import { EditComponent } from './pages/a-crud/edit/edit.component';

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
