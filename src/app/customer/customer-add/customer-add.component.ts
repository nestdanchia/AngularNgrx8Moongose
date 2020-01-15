import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailService } from '../../services/detail.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import * as CustomerPageActions from "../../redux/customer.actions";
import { Store } from '@ngrx/store';
import { CustomersState } from 'src/app/redux/stateReducers';
import { Observable } from 'rxjs';
import { UniqueEmailValidatorService } from 'src/app/auth/auth/authService/unique-email-validator.service';
//
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  @Input() customers$: Observable<Customer[]>;

  public customers: Customer[];
  custForm: FormGroup;
  name: string;
  email: string;
  password: string;
  //id:string;
  public d = new Date();
  public n = (this.d.valueOf()).toString();
  //this.form.value.id
  public id = this.n;
  done: boolean = true;
  custom: Customer;
  updated_at: Date = null;
  isLoadingResults = false;
  constructor(
    private store: Store<CustomersState>,
    private service: DetailService,
    private router: Router,
    private formBuilder: FormBuilder,
    private uniqueEmailValidator: UniqueEmailValidatorService



  ) { }

  ngOnInit() {
    this.custForm = this.formBuilder.group({
      name: [null, Validators.required],
      done: [true, Validators.required],
      id: [this.id, Validators.required],
      //email: [null, Validators.required],
      email: ['', [Validators.required, Validators.email],//sync validators
        [this.uniqueEmailValidator.validate.bind(this.uniqueEmailValidator)
        ]
      ],
      password: [null, Validators.required]
      //'updated_at' : [null, Validators.required]
    });
    this.refrescar();

  }
  onFormSubmit(form) {
    this.isLoadingResults = true;
    this.name = this.custForm.get('name').value;
    this.done = this.custForm.get('done').value;
    this.id = this.custForm.get('id').value;
    this.password = this.custForm.get('password').value;
    this.email = this.custForm.get('email').value;
    this.custom = {
      id: this.id, name: this.name, done: this.done, email:
        this.email, password: this.password
    };
    console.log('EEEEEEE', this.name, form);
    this.ActionAdd();


    this.service.addCustomer(form)
      .subscribe(res => {

        // this.Customers();
        //let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/customer']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
  public getError(controlName: string): string {
    let error = '';
    const control = this.custForm.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }
  public Customers() {
    this.router.navigate(['/customer']);
  }
  public ActionAdd() {
    this.store.dispatch(CustomerPageActions.loadSuccess({ customers: this.customers }));
    this.store.dispatch(CustomerPageActions.customerAddFinished({ customer: this.custom }));
    this.store.dispatch(CustomerPageActions.loadAllCustomersFinished({ payload: this.customers }));
  }
  public refrescar() {
    this.customers$ = this.store.select(
      state => state.customer.customers
    );
    this.service.getCustomers$().subscribe(customers => {
      this.customers = customers
    });
  }


}
