import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { FlexLayoutModule } from "@angular/flex-layout";
import { customerReducers, customerMethodFeatureKey } from "./redux/stateReducers";

import { EffectsModule } from "@ngrx/effects";
import { CustomerEffects } from "./redux/customer.effects";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { MaterialModule } from './material/material.module';
import { GlobalModule } from './auth/register/global/global.module';




@NgModule({
  declarations: [AppComponent, NotFoundComponent

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
    BrowserAnimationsModule,
    //FormerrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
