import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ListPostService} from '../../services/ListPost.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/Auth.service';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.scss']
})
export class AddPostFormComponent implements OnInit {

  private postes
  private isAuth: boolean;

  constructor(private listPost: ListPostService, private router: Router, private authService : AuthService) { }

  ngOnInit() {
    this.postes = this.listPost;
    this.isAuth = this.authService.isAuth;
  }

  onSubmit(form: NgForm){
    const title = form.value['title'];
    const texte = form.value['texte'];

    console.log(texte);

    this.postes.addPost(title, texte);
    this.router.navigate(['post']);
  }

  getStatusAuth(): boolean {
    return this.isAuth;
  }
}
