export interface Customer {
  _id?: any,
  id: string;
  name: string,
  done: boolean,
  email?: string,
  password?: string,
  tokens?: string[]
}

const customer: Customer = {
  id: '10',
  name: 'Nest',
  done: false,

}
/*
ReducerCustomerState= State

*/
export interface ReducerCustomerState {
  customers: Customer[],
  isLoading: boolean;
  errorMessage: string;
  selectedCustomer: Customer;
}

export const initialState: ReducerCustomerState = {
  customers: [
    /* { id: '',
      name:'',
      done:false
     }
     */
  ],
  isLoading: null,
  errorMessage: null,
  selectedCustomer: { id: '', name: '', done: null, email: '' }
}
