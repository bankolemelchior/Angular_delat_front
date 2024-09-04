import { HttpClient, HttpParams } from '@angular/common/http';
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
    console.log(student);
    
    return this.http.post<Student>(`${this.apiServerUrl}/api/add`, student);
  }

  public updateStudent(studentId: number, name?:string, email?:string, dob?:string): Observable<Student> {
    let params = new HttpParams();

    if(email) params = params.set("email", email);
    if(dob) params = params.set("dob", dob);

    return this.http.put<Student>(`${this.apiServerUrl}/api/update/${studentId}`, params);
  }

  public deleteStudent(studentId: number): Observable<Student> {
    return this.http.delete<Student>(`${this.apiServerUrl}/api/delete/${studentId}`);
  }
}
