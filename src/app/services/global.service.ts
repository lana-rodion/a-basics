import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../components/a-crud/employee';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  baseURL: string = 'http://localhost:3000'; // where our data is stored in JSON server

  /* httpOptions = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }; */

  constructor(private http: HttpClient) {} // Injected HTTP Client

  // call the get() method of HTTP client and pass the URL to it
  // The get() method returns an Observable
  // which we can subscribe to get the data
  // The data is returned in JSON format
  // and we can convert it to an array of objects
  // using the map() method

  // The "table" refers to "employees" JSON data
  getRecords(table: any) {
    const url = `${this.baseURL}/${table}`;
    return this.http.get(url);
  }

  getRecord(table: any, id: any) {
    const url = `${this.baseURL}/${table}/${id}`;
    return this.http.get(url);
  }

  addRecord(table: any, empData: Employee) {
    const url = `${this.baseURL}/${table}`;
    return this.http.post(url, empData);
  }

  updateRecord(table: any, empData: Employee) {
    const url = `${this.baseURL}/${table}/${empData.id}`;
    return this.http.put(url, empData);
  }

  deleteRecord(table: any, id: any) {
    const url = `${this.baseURL}/${table}/${id}`;
    console.log('id', typeof id);
    // return this.http.delete(url, this.httpOptions);
    return this.http.delete(url);
  }

  // TODO: Implement the login and logout methods
  login(user: any) {
    sessionStorage.setItem('userkey', user);
  }
  logout() {
    sessionStorage.removeItem('userkey');
  }
}
