import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: 'personal-info',
    loadChildren: () => import('./personal-info/personal-info.module').then(m => m.PersonalInfoModule)
  },
  { path: 'hobbies',
    loadChildren: () => import('./hobbies/hobbies.module').then(m => m.HobbiesModule)
  },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
