import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // root level access to over all the components
})
export class AuthService {
  // The baseURL property is the base URL for the API endpoint
  // that provides the housing location data
  baseURL: string = 'http://localhost:3000/locations';
  constructor(
    private http: HttpClient // HttpClient is used to make HTTP requests
  ) {}

  getAllLocations() {
    // Fetch all housing locations from the API endpoint
    return this.http.get(this.baseURL);
  }
  getLocationById(id: number) {
    // Fetch a specific housing location by its ID
    return this.http.get(`${this.baseURL}/${id}`);
  }
  createNewLocation(location: any) {
    // Submit a new housing location to the API endpoint
    return this.http.post(this.baseURL, location);
  }
  updateLocation(location: any) {
    // Update an existing housing location by its ID
    return this.http.put(`${this.baseURL}/${location.id}`, location);
  }
  deleteLocationById(id: number) {
    // Delete a housing location by its ID
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
