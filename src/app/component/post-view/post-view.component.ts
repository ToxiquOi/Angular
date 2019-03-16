import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostModel} from '../../model/post.model';
import {PostListService} from '../../services/postList.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.sass']
})
export class PostViewComponent implements OnInit, OnDestroy {

  public postsModel: PostModel[] = [];
  public postSubscription: Subscription;

  constructor(private postListService: PostListService) { }

  ngOnInit() {
    this.postSubscription = this.postListService.postSubject.subscribe(
      (posts: PostModel[]) => {
        this.postsModel = posts;
      }
    );
    this.postListService.emitPost();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

  onSave() {
    this.postListService.savePostInDb();
  }

  onGetPost() {
    this.postListService.getPostFromDb();
    console.log(this.postsModel);
  }

}
