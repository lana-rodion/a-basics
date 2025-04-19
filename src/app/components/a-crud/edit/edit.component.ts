import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../services/global.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  id: any; // To store the ID of the employee
  empData: any; // To store the employee data

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {
    // Initialization logic here
    this.route.paramMap.subscribe((para) => {
      this.id = para.get('id'); // Get the ID from the route parameters
      this.globalService
        .getRecord('employees', this.id)
        .subscribe((res: any) => {
          this.empData = { ...res }; // Get the employee data
        });
    });
  }

  putData(val: any) {
    const emp = {
      id: this.id, // The same ID as the one we are updating
      name: val.ename, // Old values
      post: val.epost,
      salary: val.esalary,
      address: val.ecity,
    };

    this.globalService.updateRecord('employees', emp).subscribe(() => {
      alert('Record Updated');
      this.router.navigate(['/crud']);
    });
  }

  back() {
    // Navigate back to the previous page
    window.history.back();
  }
}
