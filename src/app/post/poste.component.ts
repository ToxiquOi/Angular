import {Component, Input, OnInit} from '@angular/core';
import {AuthComponent} from '../auth/auth.component';
import {AuthService} from '../services/Auth.service';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.scss']
})
export class PosteComponent implements OnInit {

  @Input() posteTitle: string;
  @Input() posteTexte: string;
  @Input() posteLike: number = 0;

  lastUpdate: Date = new Date;
  isAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuth;
  }

  getStatusAuth() : boolean{
    return this.isAuth;
  }

  onLike(aritm: string): void{
    (aritm == "+")? this.posteLike++ : this.posteLike--;
  }

}
