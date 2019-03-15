import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostModel} from '../../model/post.model';
import {PostListService} from '../../services/postList.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.sass']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private postListService: PostListService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    const newPost = new PostModel(
      0,
      formValue.title,
      formValue.content,
      0,
      new Date()
    );

    this.postListService.addPost(newPost);
    this.router.navigate(['/post']);
  }

}
