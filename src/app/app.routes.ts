import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: 'home', loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent)},
  {
    path: 'personal-info',
    loadComponent: () => import('./personal-info/personal-info.component').then((c) => c.PersonalInfoComponent),
  },
  {path: 'hobbies', loadComponent: () => import('./hobbies/hobbies.component').then((c) => c.HobbiesComponent)},
  {path: '**', redirectTo: 'home'},
];
