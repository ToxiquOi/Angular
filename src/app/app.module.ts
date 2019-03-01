import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosteComponent } from './poste/poste.component';
import { ListPostService } from "./services/ListPost.service";

@NgModule({
  declarations: [
    AppComponent,
    PosteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ListPostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
