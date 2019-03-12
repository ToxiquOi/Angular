import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosteComponent } from './post/poste.component';
import { ListPostService } from "./services/ListPost.service";
import { PostViewComponent } from './post-view/post-view.component';
import { AuthComponent } from './auth/auth.component';
import {AuthService} from './services/Auth.service';
import {FormsModule} from '@angular/forms';
import { PageNotExistComponent } from './page-not-exist/page-not-exist.component';
import { AddPostFormComponent } from './add-post-form/add-post-form.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from './services/User.service';



@NgModule({
  declarations: [
    AppComponent,
    PosteComponent,
    PostViewComponent,
    AuthComponent,
    PageNotExistComponent,
    AddPostFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
