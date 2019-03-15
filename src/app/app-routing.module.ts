import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostViewComponent} from "./component/post-view/post-view.component";
import {PostFormComponent} from "./component/post-form/post-form.component";
import {HomePageComponent} from './component/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'post', component: PostViewComponent},
  { path: 'newPost', component: PostFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
