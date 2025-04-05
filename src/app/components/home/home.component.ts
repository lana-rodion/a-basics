import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location/housinglocation';
import { HousingService } from '../housing-location/housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // Injecting the HousingService to access the housing location data
  // The housingService is used to fetch the list of housing locations
  // and to provide the data to the HousingLocationComponent for display
  // The housingLocationList is an array of HousingLocation objects
  // It is initialized by calling the getAllHousingLocations method of the HousingService
  // The housingLocationList is used to display the list of housing locations on the home page
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
