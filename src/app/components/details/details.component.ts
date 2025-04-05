import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing-location/housing.service';
import { HousingLocation } from '../housing-location/housinglocation';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    console.log('housingLocationId', housingLocationId);
    console.log('route.snapshot.params', this.route.snapshot.params);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}
