import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { FooterModule } from './footer/footer.module';
import { IndexModule } from './index/index.module';


@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    FooterModule,
    IndexModule
  ],
})
export class LandingPageModule { }
