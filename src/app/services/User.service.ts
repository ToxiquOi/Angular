import {UserModel} from '../model/User.model';
import {Subject} from 'rxjs';

export class UserService{
  private users: UserModel[] = [
    new UserModel('Will', 'Alexander', 'will@will.com', new Date(1997, 0, 15), ['coder', 'boire du café'])
  ];
  userSubject = new Subject<UserModel[]>()

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: UserModel){
    this.users.push(user);
    this.emitUsers();
  }
}
