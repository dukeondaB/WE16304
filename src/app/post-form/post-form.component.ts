import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;
  constructor(private postService:PostService,
              private route:Router) {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required), // vừa nhận vừa validate
      content: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]), // content có input name = content
      status: new FormControl(0) // tham số thứ 2 của formcontrol là validate
    })
  }

  ngOnInit(): void {
  }
  onSubmit(data: any){
    this.postService.addPost(data).subscribe(data=>{
      this.route.navigate(['posts']);
    })
  }
}
