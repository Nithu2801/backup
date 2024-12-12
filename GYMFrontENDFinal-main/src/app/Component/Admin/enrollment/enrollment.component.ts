import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnrollmentService } from '../../../Services/enrollment.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  memberId: number | null = null;
  enrollablePrograms: any[] = []; // Programs available for enrollment
  enrolledPrograms: any[] = []; // Programs the member is enrolled in

  constructor(
    private route: ActivatedRoute,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    // Retrieve the memberId from the route parameters
    this.route.paramMap.subscribe(params => {
      this.memberId = +params.get('memberId')!; // Convert to number
      if (this.memberId) {
        this.loadPrograms(); // Load programs when the memberId is available
      }
    });
  }

  // Load enrollable and enrolled programs for the selected member
  loadPrograms(): void {
    // Fetch the list of programs available for enrollment
    this.enrollmentService.getEnrollablePrograms(this.memberId!).subscribe(data => {
      this.enrollablePrograms = data; // Save response to enrollablePrograms
    });

    // Fetch the list of programs the member is enrolled in
    this.enrollmentService.getMemberEnrolledPrograms(this.memberId!).subscribe(data => {
      this.enrolledPrograms = data; // Save response to enrolledPrograms
    });
  }

  // Method to handle enrollment in a program
  enrollInProgram(programId: number): void {
    if (this.memberId !== null) {
      this.enrollmentService.enrollInProgram(this.memberId, programId).subscribe(
        (response: any) => {
          // On successful enrollment, refresh the programs list
          this.loadPrograms();
          console.log('Successfully enrolled in program:', programId);
        },
        (error: any) => {
          console.error('Enrollment failed:', error);
        }
      );
    }
  }
}
