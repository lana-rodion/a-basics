import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../../../services/global.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent implements OnInit {
  empDataArray: Array<Employee> = []; // To store our employees data

  constructor(private globalService: GlobalService, private router: Router) {}

  ngOnInit(): void {
    // Initialize the component when it is loaded
    /* this.globalService.getRecords('employees').subscribe(
      (res) => (this.empDataArray = res as Employee[]) // Get all records on screen
    ); */
  }

  addData(data: any) {
    let lastId = this.empDataArray.length + 1;

    const empObj = {
      id: lastId,
      name: data.ename,
      post: data.epost,
      salary: data.esalary,
      address: data.ecity,
    };

    this.globalService.addRecord('employees', empObj).subscribe(() => {
      alert('Record Added');
      this.router.navigate(['/crud']); // After successfull insertion of data, go back to home page automatically
    });
  }

  back() {
    // Navigate back to the previous page
    window.history.back();
  }
}
