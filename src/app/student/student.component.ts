import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: any;
  constructor(private studentService: StudentService
    ) { }

  ngOnInit(): void {
    this.getlist();

  }

  getlist(){
        this.studentService.getStudents().subscribe((data)=>{
      this.students = data;
      console.log();

    });
    // reload lại component live cmnl
    // this.ngOnInit()
  }
  delete(id:any){

    this.studentService.deleteStudent(id).subscribe(data=>{
      this.getlist();
    });
  }
}
