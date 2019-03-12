import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostViewComponent} from './post-view/post-view.component';
import {AuthComponent} from './auth/auth.component';
import {PageNotExistComponent} from './page-not-exist/page-not-exist.component';
import {AddPostFormComponent} from './add-post-form/add-post-form.component';
import {UserListComponent} from './user-list/user-list.component';

const routes: Routes = [
  { path: 'post', component: PostViewComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'newPost', component: AddPostFormComponent},
  { path: 'users', component: UserListComponent},
  { path: '', component: PostViewComponent},
  { path: 'not-found', component: PageNotExistComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
