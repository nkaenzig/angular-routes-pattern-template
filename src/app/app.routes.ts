import { appRoutesNames } from './app.routes.names';
import { PUBLIC_ROUTES } from './public/public.routes';

export const APP_ROUTES = [
  {path: '', children: PUBLIC_ROUTES }
];
