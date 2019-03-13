import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosteComponent } from './component/post/poste.component';
import { ListPostService } from "./services/ListPost.service";
import { PostViewComponent } from './component/post-view/post-view.component';
import { AuthComponent } from './component/auth/auth.component';
import {AuthService} from './services/Auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PageNotExistComponent } from './component/page-not-exist/page-not-exist.component';
import { AddPostFormComponent } from './component/add-post-form/add-post-form.component';
import { UserListComponent } from './component/user-list/user-list.component';
import {UserService} from './services/User.service';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NewUserComponent } from './component/new-user/new-user.component';



@NgModule({
  declarations: [
    AppComponent,
    PosteComponent,
    PostViewComponent,
    AuthComponent,
    PageNotExistComponent,
    AddPostFormComponent,
    UserListComponent,
    NavbarComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ListPostService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
