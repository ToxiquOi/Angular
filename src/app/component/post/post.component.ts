import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostModel} from '../../model/post.model';
import {PostListService} from '../../services/postList.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit, OnDestroy {

  public postModel: PostModel;
  public postSubscription: Subscription;

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() like: number;
  @Input() date: Date;

  constructor(private postListService: PostListService) { }

  ngOnInit() {
    this.postSubscription = this.postListService.postSubject.subscribe(
      (users: PostModel[]) => {
        this.postModel = users[this.id];
      }
    );
    this.postListService.emitPost();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

  onLike(aritm: string): void {
    (aritm === '+') ? this.postModel.like++ : this.postModel.like--;
    this.postModel.date = new Date();
    this.postListService.emitPost();
  }

  onDelete(){
    this.postListService.deletePost(this.id);
  }
}
