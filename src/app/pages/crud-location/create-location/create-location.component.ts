import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-location',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-location.component.html',
  styleUrl: './create-location.component.css',
})
export class CreateLocationComponent implements OnInit {
  // Define properties for the component
  @Input() fileToUpload: File | null = null;

  fileName: string = '';
  msg: string = '';
  isValid: string = '';
  createFormGroup: FormGroup = new FormGroup({});
  id: number | null = null;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    // Initialize the component
    this.createFormGroup = this.fb.group({
      // There is not the id before location will created
      name: [''],
      city: [''],
      state: [''],
      photo: [''],
      availableUnits: [''],
      wifi: [false],
      laundry: [false],
    });
  }

  back() {
    this.router.navigate(['dashboard']);
  }

  createLocation() {
    const newLocation = {
      id: this.id,
      name: this.createFormGroup.get('name')?.value,
      city: this.createFormGroup.get('city')?.value,
      state: this.createFormGroup.get('state')?.value,
      photo: this.createFormGroup.get('photo')?.value,
      availableUnits: this.createFormGroup.get('availableUnits')?.value,
      wifi: this.createFormGroup.get('wifi')?.value,
      laundry: this.createFormGroup.get('laundry')?.value,
    };

    if (
      newLocation.name.trim().length == 0 ||
      newLocation.city.trim().length == 0 ||
      newLocation.state.trim().length == 0 ||
      newLocation.availableUnits.length == 0
    ) {
      this.msg = 'Please fill all the requiered fields';
      this.isValid = 'invalid';
      return;
    } else if (newLocation.photo == this.fileToUpload) {
      this.msg = 'Please upload a photo';
      this.isValid = 'invalid';
    } else if (newLocation.wifi == null) {
      this.msg = 'Please select wifi option';
      this.isValid = 'invalid';
    } else if (newLocation.laundry == null) {
      this.msg = 'Please select laundry option';
      this.isValid = 'invalid';
    } else {
      this.auth.createLocation(newLocation).subscribe(() => {
        this.msg = 'Location created successfully';
        confirm(this.msg);
        this.isValid = 'valid';
        setTimeout(() => {
          this.router.navigate(['/locations']);
        }, 2000);
      });
    }
  }
}
