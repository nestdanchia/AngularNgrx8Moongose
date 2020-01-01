import { HeaderComponent } from './../header/header.component';
import { LayoutComponent } from './../layout/layout.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,

    BarraLateralComponent,

  ],
  //[selected]="store.storeId == personalInfo.homeStore?.storeId">
  imports: [
    CommonModule,
    HomeRoutingModule,
    // StoreModule.forFeature( featureStateName,customerReducers),
    // EffectsModule.forFeature([CustomerEffects]),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class HomeModule { }
