import { Component, OnInit } from '@angular/core';
import { complexRoutesNames } from './complex.routes.names';

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.scss']
})
export class ComplexComponent implements OnInit {

  lazyLink = './' + complexRoutesNames.LAZY_SUB;
  eagerLink = './' + complexRoutesNames.EAGER_SUB;

  constructor() { }

  ngOnInit() {
  }

}
