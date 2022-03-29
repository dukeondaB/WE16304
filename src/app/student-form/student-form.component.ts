import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { StudentComponent } from '../student/student.component';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {


    id: any ;
  constructor(private studentService: StudentService,
    private student: StudentComponent,
    private route:ActivatedRoute,
    private router:Router

    ) { }

    newStudent : any = {
      name: "",
      class: ""
    }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.studentService.getStudent(this.id).subscribe(data=>{
        this.newStudent = data;
      });

    }
  }
  // thêm mảng để post lên db


  onSubmit(data: any){
    if (this.id) {
      this.studentService.updateStudent(this.newStudent,this.id).subscribe(res=>{
 this.student.getlist();
      });
    }
    this.studentService.postStudent(this.newStudent).subscribe(res=>{
      console.log(res);
      this.student.getlist();
      // this.router.navigate(['/students']); cái nì để chuyển hướng nếu k chung màn hình
    })

    this.newStudent= {
      name: "",
      class: ""
    }
  }
}
