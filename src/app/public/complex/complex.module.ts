import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplexComponent } from './complex.component';
import { EagerSubModule } from './eager-sub/eager-sub.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ComplexComponent],
  imports: [
    CommonModule,
    EagerSubModule,
    RouterModule
  ]
})
export class ComplexModule { }
