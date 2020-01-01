import { CustomerDetailComponent } from './../../customer/customer-detail/customer-detail.component';
import { LayoutComponent } from './../layout/layout.component';
import { CustomersViewComponent } from './../../customer/customers-view/customers-view.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/app/core/not-found/not-found.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';


const routes: Routes = [
  {
    path: '',
    component:LayoutComponent,

  children:[
    /* {
        path: 'customer',
        component: CustomersViewComponent

      },*/
      {path: 'customer',
        loadChildren: () => import('../../customer/customer/customer.module').then(m => m.CustomerModule)
      },

    ]


  }
];
  /*{
    path:'',
    component: HomeComponent ,

  },

  {
    path:'customer',
    component:CustomersViewComponent
  }*/





@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
