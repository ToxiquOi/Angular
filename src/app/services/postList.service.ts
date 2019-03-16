import {Injectable} from '@angular/core';
import {PostModel} from '../model/post.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class PostListService {

  public postsModel: PostModel[] = [];
  public postSubject: Subject<PostModel[]> = new Subject<PostModel[]>();

  constructor(private httpClient: HttpClient) {
  }

  addPost(post: PostModel): void {
    (this.postsModel.length <= 0) ? post.id = 0 : post.id = this.postsModel[(this.postsModel.length - 1)].id + 1;

    console.log(post);
    this.postsModel.push(post);
    this.emitPost();
  }

  emitPost(): void {
    this.postSubject.next(this.postsModel.slice());
  }

  savePostInDb(): void {
    this.httpClient.put('https://angular-activite2.firebaseio.com/blog.json', this.postsModel).subscribe( () => {
        console.log('enregistrement terminé !' + this.postsModel);
      },
      (erreur) => {
        console.log('erreur' + erreur);
      });
  }

  getPostFromDb(): void {
    this.httpClient.get<PostModel[]>('https://angular-activite2.firebaseio.com/blog.json').subscribe( (reponse) => {

        this.postsModel = reponse;
        this.emitPost();
      },
      (erreur) => {
        console.log('erreur recup' + erreur);
      });
  }

  deletePost(id: number): void {
    let i: number = 0;

    (this.postsModel.length === id) ? this.postsModel.pop() : this.postsModel.splice(id, 1);
    this.postsModel.forEach(
      (post: PostModel) => {
        post.id = i;
        i++;
      }
    )
    this.emitPost();
  }

}
