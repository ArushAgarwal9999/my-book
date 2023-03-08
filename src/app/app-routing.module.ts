import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: 'customer', loadChildren: () => import('./cutomer/cutomer.module').then(m => m.CutomerModule) }, 
  { path: 'expert', loadChildren: () => import('./expert/expert.module').then(m => m.ExpertModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
