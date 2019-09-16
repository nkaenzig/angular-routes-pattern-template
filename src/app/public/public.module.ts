import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageModule } from './landing-page/landing-page.module';
import { LazyModule } from './lazy/lazy.module';
import { ComplexModule } from './complex/complex.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LandingPageModule, // don't import Lazy module, as it's lazy..
    ComplexModule
  ]
})
export class PublicModule { }
