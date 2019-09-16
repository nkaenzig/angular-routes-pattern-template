import { ComplexComponent } from './complex.component';
import { complexRoutesNames } from './complex.routes.names';
import { EAGER_SUB_ROUTES } from './eager-sub/eager-sub.routes';

export const COMPLEX_ROUTES = [
  { path: '', component: ComplexComponent },
  {
    path: complexRoutesNames.EAGER_SUB,
    children: EAGER_SUB_ROUTES
  },
  {path: complexRoutesNames.LAZY_SUB, loadChildren: () => import('./lazy-sub/lazy-sub.module').then(m => m.LazySubModule)}
];
