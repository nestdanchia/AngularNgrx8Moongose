import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Customer } from "../../models/customer";
import { Observable } from 'rxjs';
import * as CustomerPageActions from "../../redux/customer.actions";
import { Store,select } from "@ngrx/store";
import { CustomersState } from 'src/app/redux/stateReducers';
import { DetailService } from '../../services/detail.service';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

    private custom$:Observable<Customer>;
    uno:Customer;
    id:string;
    custom:Customer;
    customers:Customer[];
    public customers$: Observable<Customer[]>
    
  
  constructor(
    private service:DetailService,
    private activatedRoute:ActivatedRoute,
    private store: Store<CustomersState>,
  
  ) 
  {/*no lo lee desde el constructor
    this.activatedRoute.params
    .subscribe((params:Params)=>{
      const id=params.id;
      this.custom=this.service.getCustom(id);
      console.log('detail constructor',this.custom)
      //this.custom=this.getCustom(id)
    });*/
    //this.customers$ = store.pipe(select('customer.customers'));

  }
    


  

  ngOnInit(): void {
  //error no puede leer la propiedad customer  this.customers$=this.service.getCustomerList$();
    // 
  this.id=this.activatedRoute.snapshot.params["id"];
  this.custom=this.service.getCustom(this.id);
        console.log('detail',this.custom);
        this.store.dispatch(
          CustomerPageActions.customerSelected({ customer: this.custom })
        );
      
      this.refrescar()
    }
     public refrescar(){
       this.customers$=this.service.getCustomerList$();
       /*
      this.customers$ = this.store.select(
        state => state.customer.customers
      );*/
      this.service.getCustomers$().subscribe(customers => {
        this.customers = customers
      });
     }
  }
/*
 // this.customers$=this.service.getCustomerList$();
       
       this.service.getCustomers$().subscribe(customers=>{
        customers=this.customers
      });
    this.activatedRoute.params
    .subscribe((params:Params)=>{
     this.id=params.id;

      this.custom=this.service.getCustom(this.id);
      console.log('detail',this.custom)
      //this.custom=this.getCustom(id)
    });
    //this.customers$ = store.pipe(select('customer.customers'));
    this.customers$=this.service.getCustomerList$();
*/
//this.customers$ = this.store.pipe(select('customer.customers'));

  
  

   
  

/*
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OperationsService } from "./operations.service";
import { Operation } from "./operation.class";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "cf-item",
  template: `
  <h2>Operation Details</h2>
  <h3>{{ operation | json }}</h3>
  <h4>{{ message }}</h4>
  <h5>{{ fullError | json }}</h5>
  `,
  styles: []
})
export class ItemComponent implements OnInit {
  private _id: string;
  public operation: Operation;
  public message: string;
  public fullError: any;

  constructor(
    private route: ActivatedRoute,
    private operationsService: OperationsService
  ) {}

  ngOnInit() {
    this._id = this.getIdFromRoute();
    this.getDataById();
	// this.route.params.subscribe(params=>{ this._id=params["id"];this.getDataById()};
  }

  private getIdFromRoute() {
    return this.route.snapshot.params["id"];
  }

  private getDataById() {
    this.operationsService
      .getOperationById$(this._id)
      .subscribe(this.showData.bind(this), this.catchError.bind(this));
  }

  private showData(data) {
    this.operation = data;
    this.message = `Found data for _id: ${this._id}`;
  }

  private catchError(err) {
    if (err instanceof HttpErrorResponse) {
      this.catchHttpError(err);
    } else {
      this.message = `Unknown error, text: ${err.message}`;
    }
    this.fullError = err;
  }

  private catchHttpError(err: HttpErrorResponse) {
    if (err.status == 404) {
      this.showNotFoundError();
    } else {
      this.showServerError(err);
    }
  }

  private showNotFoundError() {
    this.message = `NOT FOUND data for _id: ${this._id} !!!`;
    this.fullError = null;
  }

  private showServerError(err: HttpErrorResponse) {
    this.message = `Server returned code ${err.status}, text: ${
      err.statusText
    }`;
    this.fullError = err;
  }
}

*/