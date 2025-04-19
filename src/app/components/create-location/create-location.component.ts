import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
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
  loading: boolean = false;
  msg: string = '';
  isValid: string = '';
  createFormGroup: FormGroup = new FormGroup({});
  id: number = 0;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    // Initialize the component when it is loaded
    // this.loading = false;
    this.createFormGroup = this.fb.group({
      id: [this.id + 1],
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
    this.auth.getAllLocations().subscribe((locations: any) => {
      for (let i in locations) {
        this.id = locations[i].id;
        this.createFormGroup.get('id')?.setValue(this.id);
      }
      //return (this.id = locations.length + 1);
      return this.id;
    });
    let name = this.createFormGroup.get('name')?.value;
    let city = this.createFormGroup.get('city')?.value;
    let state = this.createFormGroup.get('state')?.value;
    let photo = this.createFormGroup.get('photo')?.value;
    let availableUnits = this.createFormGroup.get('availableUnits')?.value;
    let wifi = this.createFormGroup.get('wifi')?.value;
    let laundry = this.createFormGroup.get('laundry')?.value;

    if (
      name.trim().length == 0 ||
      city.trim().length == 0 ||
      state.trim().length == 0 ||
      availableUnits.length == 0
    ) {
      this.msg = 'Please fill all the requiered fields';
      this.isValid = 'invalid';
      return;
    } else if (photo == this.fileToUpload) {
      this.msg = 'Please upload a photo';
      this.isValid = 'invalid';
    } else if (wifi == null) {
      this.msg = 'Please select wifi option';
      this.isValid = 'invalid';
    } else if (laundry == null) {
      this.msg = 'Please select laundry option';
      this.isValid = 'invalid';
    } else {
      this.auth.createLocation(this.createFormGroup.value).subscribe(() => {
        this.msg = 'Location created successfully';
        this.isValid = 'valid';
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 2000);
      });
    }
  }
}
