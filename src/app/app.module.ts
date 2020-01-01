import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { FlexLayoutModule } from "@angular/flex-layout";
import { customerReducers, customerMethodFeatureKey } from "./redux/stateReducers";
// https://www.oscarblancarteblog.com/2017/06/08/autenticacion-con-json-web-tokens/
// https://codingpotions.com/angular-login-sesion
// https://blog.ng-classroom.com/blog/angular/clase-3-feed/
// https://medium.com/@insomniocode/angular-autenticaci%C3%B3n-usando-interceptors-a26c167270f4
// https://code.tutsplus.com/es/tutorials/jwt-authentication-in-angular--cms-32006
import { EffectsModule } from "@ngrx/effects";
import { CustomerEffects } from "./redux/customer.effects";
// https://github.com/xavics/angular-login/tree/master/src
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//import { MaterialModule } from "./material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { MaterialModule } from './material/material.module';
import { GlobalModule } from './auth/register/global/global.module';
//import { LoginComponent } from './auth/login/login.component';
//import { RegisterComponent } from './auth/register/register.component';
//.............The Loopback Angular SDK
// https://ultimatecourses.com/blog/ngrx-store-understanding-state-selectors
// https://angular-templates.io/tutorials/about/learn-how-to-build-a-mean-stack-application
//......................
// https://www.djamware.com/post/5a0673c880aca7739224ee21/mean-stack-angular-5-crud-web-application-example
//https://levelup.gitconnected.com/simple-application-with-angular-6-node-js-express-2873304fff0f
// https://www.guru99.com/node-js-mongodb.html#2
// https://medium.com/@RupaniChirag/simple-angular-app-using-ngrx-8-store-and-effects-factory-methods-f3423b9f6d3b
//.......................................
// NODE MONGO https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb
//https://code.tutsplus.com/es/tutorials/angular-form-validation-with-reactive-and-template-driven-forms--cms-32131
//https://alligator.io/angular/material-design-angular-reference/

/*

pathMatch: 'full' significa que toda la ruta URL debe coincidir
 y es consumida por el algoritmo de coincidencia de ruta.

pathMatch: 'prefix' significa que se elige la primera
 ruta donde la ruta coincide con el inicio de la URL,
  pero luego el algoritmo de coincidencia de ruta
  continúa buscando rutas secundarias coincidentes
   donde coincide el resto de la URL.



*/
//https://www.belikesoftware.com/usar-flexbox-angular-material/
@NgModule({
  declarations: [AppComponent, NotFoundComponent,
     //LoginComponent,
    //RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GlobalModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,

    AppRoutingModule,
    StoreModule.forRoot(customerReducers),

    EffectsModule.forRoot([CustomerEffects]),

    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {}
