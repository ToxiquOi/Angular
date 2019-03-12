import {UserModel} from '../model/User.model';
import {Subject} from 'rxjs';

export class UserService{
  private users: UserModel[] = [];
  userSubject = new Subject<UserModel[]>()

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: UserModel){
    this.users.push(user);
    this.emitUsers();
  }
}
