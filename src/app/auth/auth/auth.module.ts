import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// https://www.positronx.io/angular-jwt-user-authentication-tutorial/
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from '../guards/auth-guard.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
//import { AuthInterceptorService } from '../register/global/auth-interceptor.service';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
// https://www.tutorialesprogramacionya.com/angularya/detalleconcepto.php?punto=32&codigo=32&inicio=20
/*
route guards are interfaces which can tell the router
 whether or not it should allow navigation to a requested route
  They make this decision by looking for a true or false return
   value from a class which implements the given guard interface.
   Authentication proceso para dar una identidad login form username
   Authorization luego de  Authentication se le da acceso al username a un recurso

*/
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[
    //AuthGuardService,
   /* {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }*/]
})
export class AuthModule { }
