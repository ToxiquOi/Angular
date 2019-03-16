import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostViewComponent} from './component/post-view/post-view.component';
import {PostFormComponent} from './component/post-form/post-form.component';
import {HomePageComponent} from './component/home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'post', component: PostViewComponent},
  { path: 'newPost', component: PostFormComponent},
  { path: '', component: PostViewComponent},
  { path: '**', component: PostViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
