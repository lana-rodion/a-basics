import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent implements OnInit {
  // Define properties for the component
  empData: any; // To store our employee data

  constructor(private globalService: GlobalService, private router: Router) {}

  ngOnInit(): void {
    // Initialize the component when it is loaded
    this.globalService.getRecords('employees').subscribe(
      (res) =>
        // console.log(res)
        (this.empData = res) // Get all records on screen
    );
  }

  addData(data: any) {
    const empObj = {
      id: this.empData.length + 1, // Increment the ID
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
