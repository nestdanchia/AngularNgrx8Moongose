
import { Injectable } from '@angular/core';
import * as CustomerSelector from 'src/app/redux/customer.selector';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { Store } from '@ngrx/store';
import { CustomersState } from 'src/app/redux/stateReducers';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
// "http://localhost:3030/customers";
const apiUrl = "http://localhost:3000/api";
@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private customers$: Observable<Customer[]> = this.getCustomerList$();
  //store.select(
   // state => state.customer.customers
  //);

  customers: Customer[];
  constructor(
    private store: Store<CustomersState>,
    private http: HttpClient,
   //private customers$: Observable<Customer[]>
  ) {

  }

  public getCustom(customId: string) {

    this.customers$.subscribe(data => this.customers = data)

    return this.customers.find(customer => customer.id === customId)


  }
  public getCustomers$(): Observable<Customer[]> {
    //this.customers$=this.getCustomerList$();
    return this.customers$;
  }
  public delete(id: string): Observable<Customer> {
    const url = `${apiUrl}/delete/${id}`;
    console.log('_id esde service Angular',id)
    return this.http.delete<Customer>(url, httpOptions)


  }
  public addCustomer(customer: Customer): Observable<Customer> {

    console.log('FFFFFF:', customer)
    return this.http.post<Customer>('http://localhost:3000/api/add', customer, httpOptions)

  }
  public getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/api/customer')
  }

  public getCustomerList$(): Observable<Customer[]> {
    return this.store.select(CustomerSelector.getCustomers);
  }
  public getCustomer$(): Observable<Customer> {
    return this.store.select(CustomerSelector.getSelectedCustomer);
  }


}
