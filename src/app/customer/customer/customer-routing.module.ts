import { CustomerAddComponent } from './../customer-add/customer-add.component';
import { CustomersViewComponent } from './../customers-view/customers-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';


const routes: Routes = [
  {
    path:'',
    component:CustomersViewComponent
  },
  {
    path:'add',
    component:CustomerAddComponent
  },
  {
    path:':id',
    component:CustomerDetailComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
