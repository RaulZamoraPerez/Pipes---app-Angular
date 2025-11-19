import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'basic',
    title: 'Pipes basicos',
    loadComponent: ()=> import('./pages/basic-page/basic-page')
  },
  {
    path: 'numbers',
    title: 'numbers pipes',
    loadComponent: ()=> import('./pages/numbers-page/numbers-page')
  },
  {
    path: 'uncommon',
    title: 'pipes no tan comunes',
    loadComponent: ()=> import('./pages/uncommon-page/uncommon-page')
  },
  {
    path: 'custom',
    title: 'pipes personalizados ',
    loadComponent: ()=> import('./pages/custom-page/custom-page')
  },
  { // redirect al inicio si la ruta no existe
    path: '**',
    redirectTo: 'basic'
  }
];
