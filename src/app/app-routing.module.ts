import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostViewComponent} from './component/post-view/post-view.component';
import {AuthComponent} from './component/auth/auth.component';
import {PageNotExistComponent} from './component/page-not-exist/page-not-exist.component';
import {AddPostFormComponent} from './component/add-post-form/add-post-form.component';
import {UserListComponent} from './component/user-list/user-list.component';
import {NewUserComponent} from "./component/new-user/new-user.component";

const routes: Routes = [
  { path: 'post', component: PostViewComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'newPost', component: AddPostFormComponent},
  { path: 'newUser', component: NewUserComponent},
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
