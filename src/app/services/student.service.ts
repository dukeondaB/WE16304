import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const apiUrl = 'http://localhost:3000/students';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient ) { }

  getStudents(){
    return this.http.get(apiUrl);
  }
  getStudent(id: number | string){
    return this.http.get(`${apiUrl}/${id}`);
    // http:localhost:3000/students/1
  }
  deleteStudent(id:number | string){
    return this.http.delete(`${apiUrl}/${id}`);
  }
  // sử dụng post tham số truyền vào post<kiểu dữ liệu>(urlPost,Dữ liệu gửi lên db)
  postStudent(data : any){
    return this.http.post<any>(apiUrl,data);
  }
  updateStudent(data : any, id: any){
    return this.http.put(`${apiUrl}/${id}`,data);
  }
}
