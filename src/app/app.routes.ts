import { PUBLIC_ROUTES } from './public/public.routes';
import { appRoutesNames } from './app.routes.names';


export const APP_ROUTES = [
  {path: appRoutesNames.PUBLIC, children: PUBLIC_ROUTES }
];
