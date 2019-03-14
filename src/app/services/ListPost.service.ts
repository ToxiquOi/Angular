import {Subject} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {error} from "util";

@Injectable()
export class ListPostService {

  postes = [];

  constructor(private httpClient: HttpClient) {
  }

  postSubject = new Subject<any[]>();

  addPost(title: string, content: string){
    const poste = {
      id: 0,
      title: '',
      texte: ''
    };

    poste.id = this.postes[(this.postes.length - 1)].id + 1
    poste.title = title;
    poste.texte = content;

    console.log(poste);
    this.postes.push(poste);
    this.emitPost();
  }

  emitPost(){
    this.postSubject.next(this.postes.slice());
  }

  savePostInDb(){
    this.httpClient.put('https://angular-activite2.firebaseio.com/postList.json', this.postes).subscribe( () => {
        console.log("enregistrement terminé !");
    },
      (erreur) => {
        console.log("erreur" + erreur);
      });
  }

  getPostFromDb(){
    this.httpClient.get<any[]>('https://angular-activite2.firebaseio.com/postList.json').subscribe( (reponse) => {
      console.log(reponse);
      this.postes = reponse;
      this.emitPost();
    },
      (erreur) => {
        console.log('erreur recup' + erreur);
      });
  }

  getPostes(){
    return this.postes;
  }

}
