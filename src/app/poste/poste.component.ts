import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onLike(aritm: string): void{
    (aritm == "+")? this.posteLike++ : this.posteLike--;
  }

}
