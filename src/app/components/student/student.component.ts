import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/studentServices/student.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
  }

  public getStudents() : void {
    this.studentService.getStudents().subscribe((response:Student[]) => {
      this.students=response;
      console.log(this.students);
      
    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
    }
  );
  }
}
