import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {UserModel} from "../../model/User.model";
import {UserService} from "../../services/User.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private userService : UserService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      firstname: '',
      lastName: '',
      email: '',
      birthDate: new Date()
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new UserModel(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference']
    );

    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

}
