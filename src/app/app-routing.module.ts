import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostViewComponent} from "./component/post-view/post-view.component";
import {PostFormComponent} from "./component/post-form/post-form.component";

const routes: Routes = [
  { path: 'post', component: PostViewComponent},
  { path: 'newPost', component: PostFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
