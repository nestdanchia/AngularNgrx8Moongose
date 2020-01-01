import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/models/customer';
// https://google.github.io/material-design-icons/
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() customer: Customer;
  @Output() deletCustomer = new EventEmitter<Customer>();

  today = new Date();

  constructor() { }

  ngOnInit() {
  }
  customerDelet() {
    console.log('customerDelet', this.customer.name);
    this.deletCustomer.emit(this.customer);
  }

}
