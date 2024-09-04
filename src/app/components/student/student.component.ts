import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class StudentComponent {
  
  @Input() students: Student[] = [];

  @Output() sendStudentId =new EventEmitter<number>();

  deleteS(id?:number) {
    console.log("in deletMethod");
    
    if(confirm("voulez-vous supprimer cet étudiant ??")) {
      this.sendStudentId.emit(id)
    }
  }

}
