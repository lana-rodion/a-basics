import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  id!: number; // To store the ID of the employee
  empData!: Employee; // Employee data format
  myGroup!: FormGroup;

  constructor(
    public employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialization logic here
    this.id = this.route.snapshot.params['id'];
    console.log('this.id: ', typeof this.id);
    this.employeeService.getRecord(this.id).subscribe((data: Employee) => {
      this.empData = { ...data };
      this.myGroup = new FormGroup({
        id: new FormControl(Number(this.empData.id)),
        name: new FormControl(this.empData.name),
        post: new FormControl(this.empData.post),
        salary: new FormControl(this.empData.salary),
        address: new FormControl(this.empData.address),
      });
    });
  }

  /**
   * @description Get the form
   * @memberof EditComponent
   * @returns response
   */
  get f() {
    return this.myGroup.controls;
  }

  submit(form: FormGroup) {
    this.myGroup = form.value;
    this.employeeService
      .updateRecord(this.id, {
        id: this.id,
        name: this.myGroup.value.name ?? '',
        post: this.myGroup.value.post ?? '',
        salary: this.myGroup.value.salary ?? 0,
        address: this.myGroup.value.address ?? '',
      } as Employee)
      .subscribe(() => {
        alert('Record Updated');
        this.router.navigate(['/crud']);
      });
  }

  back() {
    // Navigate back to the previous page
    window.history.back();
  }
}
