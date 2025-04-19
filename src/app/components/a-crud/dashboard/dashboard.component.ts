import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GlobalService } from '../../../services/global.service';
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
  empDataArray: Array<Employee> = []; // To store our employees data
  // term: any; // for search bar
  p: number = 1; // for pagination
  countPerPage: number = 8; // number of rows per page
  count: number = 0;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    // Initialize the component when it is loaded
    this.globalService.getRecords('employees').subscribe((res) => {
      this.empDataArray = res as Employee[]; // Get all records on screen
      this.empDataArray.forEach((emp: any) => {
        emp.id = JSON.parse(emp.id); // Parse the ID
      });
      this.count = this.empDataArray.length;
    });
  }

  delete(id: any) {
    this.globalService
      .deleteRecord('employees', id)
      .subscribe(() => alert('Record Deleted Successfully'));
  }
}
