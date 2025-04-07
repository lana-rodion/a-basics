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
  filteredLocationList: HousingLocation[] = [];
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    // If the search text is empty or undefined, reset the filtered list to the original list
    // This ensures that all locations are displayed when the search text is cleared
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  clearFilter() {
    let filter = document.getElementById('search');
    if (filter) {
      // Clear the input field
      (filter as HTMLInputElement).value = '';
      // Reset the filtered list to the original list
      this.filteredLocationList = this.housingLocationList;
    }
  }
}
