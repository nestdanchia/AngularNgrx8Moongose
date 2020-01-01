import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerPageActions from './customer.actions';
import { initialState, ReducerCustomerState } from '../models/customer';

const featureReducer = createReducer(
    initialState,
    on(CustomerPageActions.GetCustomAction, state => state),
    on(CustomerPageActions.customerSelected, (state,{customer}) =>
        ({ ...state, 
            selectedCustomer:customer, 
            //errorMessage: null 
        })),
    on(CustomerPageActions.loadRequest, state =>
        ({ ...state, 
            isLoading: true 
            //errorMessage: null 
        })),
    on(CustomerPageActions.customerAddFinished, (state, { customer }) =>
        ({
            ...state,
            /*isLoading: false,
            errorMessage: null,*/
           // customer:{
            customers: [...state.customers, customer]
           // }
        }
        )),
     on(CustomerPageActions.loadSuccess,(state,{customers})=>
     ({
        ...state,
        isLoading: false,
        errorMessage: null,
        customers
     }

     ) ),
     on(CustomerPageActions.loadAllCustomersFinished, (state, { payload }) => ({
        ...state,
        isLoading: false,
        errorMessage: null,
        customers: [...payload]
      })),
     


    on(CustomerPageActions.loadFailure, (state, { errorMessage }) =>
        ({ ...state, isLoading: false, errorMessage: errorMessage })),
    on(CustomerPageActions.customerRemove, (state, { customer }) => ({
        ...state,
        isLoading: true,
        errorMesaage: null,
        customers: [...state.customers.filter(x => x !== customer)]
    }
    ))
);


export function reducer(state: ReducerCustomerState | undefined, action: Action) {
    return featureReducer(state, action);
}
















/*
On [App Init] Load Request we want the state to reflect the following values:

state.isLoading: true
state.errorMessage: null
On [Fruits API] Load Success we want the state to reflect the following values:

state.isLoading: false
state.errorMessage: null
state.fruits: action.payload.fruits
On [Fruits API] Load Failure we want the state to reflect the following values:

state.isLoading: false
state.errorMessage: action.payload.errorMessage
*/