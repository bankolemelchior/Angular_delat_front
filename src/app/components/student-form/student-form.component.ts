import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  @Output() newStudent = new EventEmitter<Student>();

  studentForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
  })

  addStudent() {    
    if (this.studentForm.valid) {
      const student: Student = {
        name: this.studentForm.value.name, // Fournir une valeur par défaut
        email: this.studentForm.value.email,
        dob: this.studentForm.value.dob
      };
      this.newStudent.emit(student); // Émet les valeurs du formulaire
      this.studentForm.reset(); // Réinitialise le formulaire après l'ajout
    }
    
  }
}
