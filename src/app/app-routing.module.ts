import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './core/not-found/not-found.component';


const appRoutes: Routes = [
  //Esta ruta redirige una URL que coincide con el path vacío a la ruta del path '/customer'.
  {
    path: '',
    redirectTo: '/customer',
    pathMatch: 'full'
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'',
    loadChildren:()=>import('./home/home/home.module').then (m=>m.HomeModule)
  },

  {
    path: 'not-found',
    component: NotFoundComponent,
  },

  {
    path: '**',
    redirectTo: 'not-found'
  }

];

@NgModule({
exports:[RouterModule],
imports:[RouterModule.forRoot(appRoutes,{ enableTracing: true })]
})
export class AppRoutingModule { }
