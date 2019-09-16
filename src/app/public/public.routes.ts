import { publicRoutesNames } from './public.routes.names';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { COMPLEX_ROUTES } from './complex/complex.routes';

export const PUBLIC_ROUTES = [
  {path: publicRoutesNames.LANDING, component: LandingPageComponent},
  {path: publicRoutesNames.LAZY, loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)},
  {path: publicRoutesNames.COMPLEX, children: COMPLEX_ROUTES},
];
