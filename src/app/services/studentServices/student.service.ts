import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../models/student';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiServerUrl}/api/allStudents`);
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiServerUrl}/api/add`, student);
  }

  // public updateStudent(studentId: Number, name?:String, email?:String, dob?:String): Observable<Student> {
  //   return this.http.put<Student>(`${this.apiServerUrl}/api/update/${studentId}?name=${name}&email=${email}&dob=${dob}`);
  // }

  // public deleteStudent(studentId: Number): Observable<void> {
  //   return this.http.delete(`${this.apiServerUrl}/api/delete/${studentId}`)
  // }
}
