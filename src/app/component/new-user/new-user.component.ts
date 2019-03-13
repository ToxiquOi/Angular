import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";
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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      hobbies: this.formBuilder.array([])
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new UserModel(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );

    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  getHobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
  }

}