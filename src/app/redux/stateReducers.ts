import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { reducer } from "./customer.reducer";
import { ReducerCustomerState } from '../models/customer';
export const customerMethodFeatureKey = 'customerMethod';
export interface CustomersState {
  customer: ReducerCustomerState;


}

export const customerReducers: ActionReducerMap<CustomersState> = {
  customer: reducer
};

