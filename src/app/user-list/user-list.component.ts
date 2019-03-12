import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserModel} from '../model/User.model';
import {Subscription} from 'rxjs';
import {UserService} from '../services/User.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: UserModel[];
  userSubscrip: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscrip = this.userService.userSubject.subscribe(
      (users: UserModel[]) => {
        this.users = users;
      }
    );

    this.userService.emitUsers();
  }


  ngOnDestroy(){
    this.userSubscrip.unsubscribe();
  }
}
