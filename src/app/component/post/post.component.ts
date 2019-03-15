import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../../model/post.model";
import {PostListService} from "../../services/postList.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  public postModel: PostModel;

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() like: number;
  @Input() date: Date;

  constructor(private postListService: PostListService) { }

  ngOnInit() {
    this.postModel = this.postListService.postsModel[this.id];
  }

  onLike(aritm: string): void {
    (aritm == "+")? this.postModel.like++ : this.postModel.like--;
    this.postModel.date = new Date;
    this.postListService.emitPost();
  }
}
