import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { Student } from './models/student';
import { HttpErrorResponse } from '@angular/common/http';
import { StudentService } from './services/studentServices/student.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent, StudentFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Student-Manager-App';

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

  addNewStudent(newStudent:Student){
    this.studentService.addStudent(newStudent).subscribe(
      (response:Student) => {
        console.log(response);
        this.getStudents();
      },
      (error:HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

  // updateStudent(theStudent:Student){
  //   this.studentService.updateStudent(theStudent).subscribe(
  //     (response:Student) => {
  //       console.log(response);
  //       this.getStudents();
  //     },
  //     (error:HttpErrorResponse) => {
  //       console.log(error.message);
  //     }
  //   )
  // }

  deleteStudent(studentId: number) {
    
  }

}
