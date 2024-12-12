import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  // API base URL
  api = 'http://localhost:5278/api/Admin/';

  constructor(private http: HttpClient) {}

  // Get programs available for enrollment by member ID
  getEnrollablePrograms(memberId: number): Observable<any> {
    return this.http.get<any>(`${this.api}Get-Member-Enrollable-Programs/${memberId}`);
  }

  // Get programs the member is already enrolled in
  getMemberEnrolledPrograms(memberId: number): Observable<any> {
    return this.http.get<any>(`${this.api}Get-Member-Enrolled-Programs/${memberId}`);
  }

  // Enroll the member in a program (new method for enrolling a member in a program)
  enrollInProgram(memberId: number, programId: number): Observable<any> {
    return this.http.post<any>(`${this.api}Enroll-Member-In-Program`, { memberId, programId });
  }
}
