import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplexComponent } from './complex.component';
import { EagerSubComponent } from './eager-sub/eager-sub.component';
import { LazySubComponent } from './lazy-sub/lazy-sub.component';
import { EagerSubModule } from './eager-sub/eager-sub.module';


@NgModule({
  declarations: [ComplexComponent],
  imports: [
    CommonModule,
    EagerSubModule,
  ]
})
export class ComplexModule { }
