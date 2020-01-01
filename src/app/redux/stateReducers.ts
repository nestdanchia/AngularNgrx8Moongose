import { ActionReducerMap,createFeatureSelector } from '@ngrx/store';
import {reducer } from "./customer.reducer";
import {ReducerCustomerState } from '../models/customer';
export const customerMethodFeatureKey = 'customerMethod';
export interface CustomersState {
   customer : ReducerCustomerState;
   //Resumen ngtx 8
//https://medium.com/ngrx/announcing-ngrx-version-8-ngrx-data-create-functions-runtime-checks-and-mock-selectors-a44fac112627
   
 }

 export const customerReducers: ActionReducerMap<CustomersState> = {
    customer: reducer
  };
  // https://frontend.consulting/architecting-the-store-in-
  