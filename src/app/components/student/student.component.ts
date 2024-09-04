import { Component, Input, OnInit } from '@angular/core';
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

}
