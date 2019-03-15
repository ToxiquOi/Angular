import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../model/post.model';
import {PostListService} from '../../services/postList.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.sass']
})
export class PostViewComponent implements OnInit {

  public postsModel: PostModel[] = [];

  constructor(private postListService: PostListService) { }

  ngOnInit() {
    this.postsModel = this.postListService.postsModel;
  }

  onSave() {
    this.postListService.savePostInDb();
  }

  onGetPost() {
    this.postListService.getPostFromDb();
    console.log(this.postsModel);
  }

}
