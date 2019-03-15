import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './component/post/post.component';
import { PostViewComponent } from './component/post-view/post-view.component';
import { PostFormComponent } from './component/post-form/post-form.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {PostListService} from "./services/postList.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostViewComponent,
    PostFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClient,
    FormBuilder,
    PostListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
