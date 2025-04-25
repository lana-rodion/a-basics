import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Employee } from '../employee';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    NgxPaginationModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  empList: Employee[] = []; // To store our employees data
  // term: any; // for search bar
  p: number = 1; // for pagination
  countPerPage: number = 8; // number of rows per page
  count: number = 0;

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    // Initialize the component when it is loaded
    this.getEmployeesList();
  }

  getEmployeesList() {
    this.employeeService.getRecords().subscribe((res: Employee[]) => {
      this.empList = res; // Get all records on screen
      this.count = this.empList.length;
      // console.log('this.empList: ', this.empList);
    });
  }

  delete(id: any) {
    this.employeeService.deleteRecord(id).subscribe(() => {
      this.empList.findIndex((emp) => emp.id === id);
      // Remove the deleted record from the array
      this.count = this.empList.length; // Update the count
      alert('Record Deleted Successfully');
    });
  }
}
