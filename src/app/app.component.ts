import {Component, OnInit} from '@angular/core';
import {PostListService} from './services/postList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'activite2';

  constructor(private listPostService: PostListService) {

  }

  ngOnInit(): void {
    this.listPostService.getPostFromDb();
  }
}
