import { Component, inject, OnInit } from '@angular/core';
import { HousingService } from '../housing-location/housing.service';
import { HousingLocation } from '../housing-location/housinglocation.interface';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-location-dashboard',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './location-dashboard.component.html',
  styleUrl: './location-dashboard.component.css',
})
export class LocationDashboardComponent implements OnInit {
  // Define properties for the component
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  isShown = false;
  loading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  count: number = 0;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Initialize the component when it is loaded
    this.auth.getAllLocations().subscribe((response: Object) => {
      const locations = response as HousingLocation[];
      for (let i in locations) {
        this.housingLocationList.push(locations[i]);
      }

      // this.housingLocationList = locations;
      this.count = this.housingLocationList.length;
      console.log(this.housingLocationList);
    });
  }

  delete(id: number) {
    // Delete a location by its ID
    if (confirm('Are you sure?') == true) {
      this.auth.deleteLocationById(id).subscribe(() => {
        location.reload();
      });
    } else {
      console.log('Cancel delete clicked');
      this.router.navigate(['dashboard']);
    }
  }
}
