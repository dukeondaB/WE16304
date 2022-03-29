import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = 'http://localhost:3000/posts';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }
  getPosts(){
    return this.http.get(url);
  }
  addPost(data:any){
    return this.http.post(url,data);
  }
  deletePost(id: any){
    return this.http.delete(`${url}/${id}`)
  }
}
