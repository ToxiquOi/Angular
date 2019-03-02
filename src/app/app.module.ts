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



@NgModule({
  declarations: [
    AppComponent,
    PosteComponent,
    PostViewComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ListPostService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
