import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostViewComponent} from './post-view/post-view.component';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
  { path: 'post', component: PostViewComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', component: PostViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
