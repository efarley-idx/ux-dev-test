import { Component, OnInit } from '@angular/core';
import {CustomerService, Customer} from './customer.service';

@Component({
  selector: 'app-customer-directory',
  templateUrl: './customer-directory.component.html',
  styleUrls: ['./customer-directory.component.scss']
})
export class CustomerDirectoryComponent implements OnInit {
  error: any;
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.showCustomers();
  }

  showCustomers() {
    this.customerService.getCustomers()
      .subscribe(
        (data: Customer[]) => this.customers = data,
        error => this.error = error
      );
  }
}
