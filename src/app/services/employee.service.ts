import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../pages/a-crud/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  empList: Employee[] = []; // To store our employees data
  httpClient = inject(HttpClient);

  baseURL: string = 'http://localhost:3000/employees'; // where our data is stored in JSON server
  // constructor(private httpClient: HttpClient) {} // Injected HTTP Client

  getRecords(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  getRecord(id: number): Observable<Employee> {
    console.log('id: ', typeof id);
    return this.httpClient.get<Employee>(this.baseURL + '/' + id);
  }

  addRecord(empData: Employee): Observable<Employee> {
    console.log('empData: ', empData);
    console.log('empData.id: ', typeof empData.id);
    return this.httpClient.post<Employee>(this.baseURL, empData);
  }

  updateRecord(id: number, empData: Employee) {
    /* return this.httpClient.put<Employee>(this.baseURL + '/' + id, {
      id: empData.id,
      name: empData.name,
      post: empData.post,
      salary: empData.salary,
      address: empData.address,
    }); */
    const updatedEmpData = {
      id: Number(empData.id),
      name: empData.name,
      post: empData.post,
      salary: empData.salary,
      address: empData.address,
    };
    return this.httpClient.put(
      this.baseURL + '/:' + id,
      JSON.stringify(updatedEmpData)
    );
  }

  deleteRecord(id: number) {
    //console.log('id', typeof id);
    return this.httpClient.delete(`${this.baseURL}${id}`);
  }

  /* errorHandler(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error(error.message || 'Server Error'));
  } */

  // TODO: Implement the login and logout methods
  /* login(user: any) {
    sessionStorage.setItem('userkey', user);
  }
  logout() {
    sessionStorage.removeItem('userkey');
  } */
}
