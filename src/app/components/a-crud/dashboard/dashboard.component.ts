import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GlobalService } from '../../../services/global.service';
import { NgxPaginationModule } from 'ngx-pagination';

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
  empData: any; // To store our employees data
  term: any; // for search bar
  p: number = 1; // these both for pagination, count represents number of rows per page
  countPerPage: number = 8;
  count: number = 0;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    // Initialize the component when it is loaded
    this.globalService.getRecords('employees').subscribe((res) => {
      this.empData = res; // Get all records on screen
      this.count = this.empData.length;
    });
  }

  delete(id: any) {
    this.globalService
      .deleteRecord('employees', id)
      .subscribe(() => alert('Record Deleted Successfully'));
  }
}
