import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url = "https://bookstore-server-xdvo.onrender.com";

  constructor(private http: HttpClient) { }

  // admin login api call 
  adminLoginApi(data: any) {
    return this.http.post(`${this.server_url}/admin/login`, data)
  }

  // add book api call
  addBookApi(data: any) {
    return this.http.post(`${this.server_url}/addbook`, data)
  }

  // getallBooks
  getAllBooksApi() {
    return this.http.get(`${this.server_url}/listbooks`)
  }

  // delete book
  deleteBookApi(id: any) {
    return this.http.delete(`${this.server_url}/deletebook/${id}`)
  }
}
