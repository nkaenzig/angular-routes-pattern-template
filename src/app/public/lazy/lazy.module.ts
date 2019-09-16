import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { RouterModule } from '@angular/router';
import { LAZY_ROUTES } from './lazy.routes';



@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LAZY_ROUTES)
  ]
})
export class LazyModule { }
