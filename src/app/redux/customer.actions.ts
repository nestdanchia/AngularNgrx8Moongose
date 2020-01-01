import { Customer } from './../models/customer';
import { createAction, props } from '@ngrx/store';


export const GetCustomAction = createAction('[Customer] - Get Customer');

export const loadRequest = createAction(
  '[App Init] Load Request');
export const loadFailure = createAction(
  '[Customer Api] Load Failure',
  
   props<{ errorMessage: string}>()
   );
export const loadSuccess = createAction(
  '[Customer API] Load Success', 
  props<{customers:Customer[]}>()
  );
export const customerAddFinished = createAction(
    "[Customer Component]] AddFinished ",
    props<{ customer: Customer }>()
  );
  export const customerRemove = createAction(
    "[Customer Component]] Remove",
    props<{ customer: Customer }>()
  );

  export const customerSelected = createAction(
    "[Customer Component]] Selected",
    props<{ customer: Customer }>()
  );
export const loadAllCustomersFinished = createAction(
  '[Customer Component] Load Customer Finished',
  props<{ payload: Customer[] }>()
);
  // this.store.dispatch(featureActions.loadSuccess({ fruits }))
  