import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Customer {
  address: string;
  city: string;
  contactName: string;
  email: string;
  logo: string;
  name: string;
  phone: string;
  rating: string;
  state: string;
  zipcode: string;
}

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers() {
    const configUrl = 'mocks/customer-directory.json';
    return this.http.get(configUrl);
  }
}
