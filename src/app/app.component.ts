import {Component, OnInit} from '@angular/core';
import {ListPostService} from "./services/ListPost.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  public postes: any[];

  constructor(private listPostService: ListPostService){

  }

  ngOnInit(): void {
    this.postes = this.listPostService.postes;
  }

}
