import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
