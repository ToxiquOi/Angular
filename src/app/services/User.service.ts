import {UserModel} from '../model/User.model';
import {Subject} from 'rxjs';

export class UserService{
  private users: UserModel[] = [
    new UserModel('Will', 'Alexander', 'will@will.com', ['coder', 'boire du café'])
  ];
  userSubject = new Subject<UserModel[]>()

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: UserModel){
    console.log(user)
    this.users.push(user);
    this.emitUsers();
  }
}
