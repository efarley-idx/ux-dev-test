import {Component, Input, OnInit} from '@angular/core';
import {Customer} from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  @Input() customer: Customer;
  isToggled: boolean;

  constructor() {
    this.isToggled = false;
  }

  ngOnInit() {
  }
}
