import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  // The url property is the base URL for the API endpoint
  // that provides the housing location data
  // The API is expected to return a list of housing locations
  // in JSON format, which can be consumed by the HousingService
  // to populate the housingLocationList array
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    // Fetch the data from the API endpoint
    // The fetch function is used to make an HTTP GET request
    // to the specified URL, and the response is expected to be in JSON format
    // The data is then parsed and returned as an array of HousingLocation objects
    // If the response is empty or undefined, an empty array is returned
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    // Fetch the data from the API endpoint
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received:\n
      firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
