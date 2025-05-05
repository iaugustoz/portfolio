import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: "Igor's Portfolio",
    loadComponent: () => import('./features/home/home.component'),
  },
  {
    path: 'projects/:id',
    title: "Igor's Projects",
    loadComponent: () => import('./features/projects/projects.component'),
  },
  {
    path: '**',
    title: 'Página não encontrada',
    loadComponent: () => import('./features/error/error.component'),
  },
];
