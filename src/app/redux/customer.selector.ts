import {
    
    createFeatureSelector,
    createSelector,
    
    
  } from '@ngrx/store';
  
import { CustomersState } from './stateReducers';


export const getCustomState = createFeatureSelector<CustomersState>('customerFeature');
  export const featureStateName = 'customerFeature';
  export const getCustomerFeatureState= 
  createFeatureSelector<CustomersState>
  (
    featureStateName
  );
  export const getCustomers = createSelector(
    getCustomerFeatureState,
    (state: CustomersState) => state.customer.customers
  );
  export const getSelectedCustomer = createSelector(
    getCustomerFeatureState,
    (state: CustomersState) => state.customer.selectedCustomer
  );
  export const getAllNotDoneItems = createSelector(
    getCustomerFeatureState,
    (state: CustomersState ) =>state.customer.customers.filter(x => !x.done)
  );
   
  export const loadCustomersFinished=createSelector(
    getCustomerFeatureState,
    (state: CustomersState ) =>state.customer.customers
  )
 