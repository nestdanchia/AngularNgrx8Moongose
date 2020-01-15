import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomersViewComponent } from '../customers-view/customers-view.component';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { CustomerComponent } from './customer.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { StoreModule } from '@ngrx/store';
import { customerReducers } from 'src/app/redux/stateReducers';
//import { CustomerValidatorDirective } from 'src/app/auth/auth/authService/unique-email-validator.service';


// https://www.angularjswiki.com/angular/buttons-in-angular-using-material-design-mat-button-example/
@NgModule({
  declarations: [
    CustomerComponent,
    CustomersViewComponent,
CustomerDetailComponent,
    CustomerAddComponent,
   // CustomerValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,

    ReactiveFormsModule,
    CustomerRoutingModule,
    MaterialModule,
    StoreModule.forFeature('customerFeature',customerReducers)
  ]
})
export class CustomerModule { }
