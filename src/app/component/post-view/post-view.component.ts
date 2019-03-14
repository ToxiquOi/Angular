import { Component, OnInit } from '@angular/core';
import {ListPostService} from '../../services/ListPost.service';


@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  public postes = [];

  constructor(private listPostService: ListPostService) { }

  ngOnInit() {
    this.postes = this.listPostService.postes;
    this.onGetPost();
  }

  onSave(){
    this.listPostService.savePostInDb();
  }

  onGetPost(){
    this.listPostService.getPostFromDb();
    this.postes = this.listPostService.getPostes()
    console.log(this.postes)
  }

}
