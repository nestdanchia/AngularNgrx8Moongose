export interface Customer {
    _id?:any,
    id: string;
    name:string,
    done:boolean,
    email?:string,
    password?:string,
    tokens?:string[]
}

const customer:Customer={
    id: '10',
    name:'Nest',
    done:false,

}
/*
ReducerCustomerState= State

*/
export interface ReducerCustomerState{
    customers:Customer[],
    isLoading: boolean;
    errorMessage: string;
    selectedCustomer: Customer;
}

export const initialState:ReducerCustomerState={
    customers:[
       /* { id: '',
         name:'',
         done:false
        }
        */
    ],
    isLoading:null,
    errorMessage: null,
    selectedCustomer:{id:'',name:'',done:null,email:''}
}
/*
a-ngrx-store-module	create an NgRx store module
a-ngrx-create-action	create an NgRx action with createAction
a-ngrx-create-action-props	create an NgRx action with createAction with props
a-ngrx-create-reducer	create an NgRx reducer with createReducer
a-ngrx-create-effect	create an NgRx effect with createEffect
a-ngrx-create-effect-api	create an NgRx effect with createEffect for an API call
a-ngrx-create-selector	create an NgRx selector with createSelector
a-ngrx-create-selector-props	create an NgRx selector with createSelector with props
a-ngrx-data-entity-data-module-import	add EntityDataModule
a-ngrx-data-entity-metadata	create the entity metadata for NgRx
a-ngrx-data-entity-collection-data-service	create a data service using NgRx
*/
