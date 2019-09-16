import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LAZY_SUB_ROUTES } from './lazy-sub.routes';
import { LazySubComponent } from './lazy-sub.component';



@NgModule({
  declarations: [LazySubComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LAZY_SUB_ROUTES)
  ]
})
export class LazySubModule { }
