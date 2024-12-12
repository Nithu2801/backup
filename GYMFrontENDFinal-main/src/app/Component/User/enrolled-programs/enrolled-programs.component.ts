import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../../Services/enrollment.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-enrolled-programs',
  templateUrl: './enrolled-programs.component.html',
  styleUrl: './enrolled-programs.component.css'
})
export class EnrolledProgramsComponent implements OnInit{
  memberId:string;
  member:any;
  workoutPrograms:any;
  constructor(private enrollmentSservice:EnrollmentService,private route:ActivatedRoute,private userService:UserService){
    this.memberId = this.route.snapshot.paramMap.get('id') ?? ''; // Default to an empty string if null
  }
  ngOnInit(): void {
    this.userService.getUserDetails(this.memberId).subscribe(data => {
      this.member=data;
      console.log(this.member);
      this.enrollmentSservice.getMemberEnrolledPrograms(this.member.id).subscribe(i=>{
        this.workoutPrograms=i;
        console.log(this.workoutPrograms);
        
      })
    });
  }
}