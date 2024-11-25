import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
     loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule) },
  { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
