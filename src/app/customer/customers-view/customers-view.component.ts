import { Customer } from "./../../models/customer";

import { Component, OnInit } from "@angular/core";

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { Observable } from "rxjs";

import { Store, select } from "@ngrx/store";
import * as CustomerPageActions from "../../redux/customer.actions";

import { CustomersState } from "src/app/redux/stateReducers";

import { MatSnackBar } from "@angular/material/snack-bar";
import { DetailService } from '../../services/detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/auth/auth/authService/service.service';
@Component({
  selector: "app-customers-view",
  templateUrl: "./customers-view.component.html",
  styleUrls: ["./customers-view.component.css"]
})


export class CustomersViewComponent implements OnInit {
  customer;
  customers: Customer[];
  objCustomer: Customer;
  customerControl = new FormControl("{}");
  show: boolean = false;
  sesion: boolean = false;
  name = "Berries";
  id: string;
  done;
  email: string

  public customers$: Observable<Customer[]>;

  public selected$: Observable<Customer> = this.service.getCustomer$();

  customerForm: FormGroup;


  constructor(
    private store: Store<CustomersState>,
    private fb: FormBuilder,
    private _snackbar: MatSnackBar,
    private service: DetailService,
    private serviceToken: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.activaDesactiva();
  }




  ngOnInit() {
    this.buildForm();
    this.refrescar();
    this.store.dispatch(CustomerPageActions.loadRequest());

  }
  buildForm() {
    this.customerForm = this.fb.group({
      customerControl: [null, [Validators.required]]
    });
    console.log(
      "get customerControl",
      this.customerForm.get("customerControl").value
    );
    this.customerForm.controls.customerControl.valueChanges.subscribe(data => {
      this.name = data.name;
      this.id = data.id;
      this.done = data.done;
      this.email = data.email;
      console.log(this.id);
    });
  }
  refrescar() {
    this.customers$ = this.service.getCustomerList$();

    this.customers$
      .subscribe(customers => {
        this.customers = customers
      });
    this.selected$.subscribe(custom => this.objCustomer = custom);

  }
  openSnackBar(message: string, action: string) {
    this._snackbar.open(message, action, {
      duration: 4000
    });
  }

  cerrarSecion() {
    this.serviceToken.logout();
    this.activaDesactiva();
  }
  activaDesactiva() {
    this.sesion = this.serviceToken.logIn()
  }
  Cerrar() {
    this.show = false;
  }
  onCustomerChange() {

    this.customer = this.customerForm.value;
    console.log('CustomerView', this.customer);
    this.objCustomer = this.customer.customerControl;
    console.log('objCustomer', this.customer);
    this.store.dispatch(
      CustomerPageActions.customerSelected({ customer: this.objCustomer })
    );

    this.selected$.subscribe(data => (this.name = data.name));
  }
  verSeleccionado() {
    this.show = true;
    console.log("seleccionado", this.objCustomer);
  }
  onDelet(customer) {
    this.service.delete(customer._id)

      .subscribe(res => res);
    console.log('!!!!!!!!!', customer._id)

    this.store.dispatch(CustomerPageActions.customerRemove({ customer }));




    console.log('delete', customer.name)

  }
}
