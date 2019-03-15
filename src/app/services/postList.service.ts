import {Injectable} from '@angular/core';
import {PostModel} from '../model/post.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class PostListService {

  public postsModel: PostModel[] = [
    // new PostModel(0, "test", "yoollooo", 0, new Date())
  ];
  public postSubject: Subject<PostModel[]> = new Subject<PostModel[]>();

  constructor(private httpClient: HttpClient) {
    this.getPostFromDb();
  }

  addPost(post: PostModel) {

    (this.postsModel.length <= 0) ? post.id = 0 : post.id = this.postsModel[(this.postsModel.length - 1)].id + 1;

    console.log(post);
    this.postsModel.push(post);
    this.emitPost();
  }

  emitPost() {
    this.postSubject.next(this.postsModel.slice());
  }

  savePostInDb() {
    this.httpClient.put('https://angular-activite2.firebaseio.com/blog.json', this.postsModel).subscribe( () => {

        console.log('enregistrement terminé !' + this.postsModel);
      },
      (erreur) => {
        console.log('erreur' + erreur);
      });
  }

  getPostFromDb() {
    this.httpClient.get<PostModel[]>('https://angular-activite2.firebaseio.com/blog.json').subscribe( (reponse) => {

        this.postsModel = reponse;
        this.emitPost();
      },
      (erreur) => {
        console.log('erreur recup' + erreur);
      });
  }

}
