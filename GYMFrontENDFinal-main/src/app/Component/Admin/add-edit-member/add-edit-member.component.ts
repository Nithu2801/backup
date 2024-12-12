import { Component, Input } from '@angular/core';
import { MemberService } from '../../../Services/member.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Member } from '../../../Interfaces/member';

@Component({
  selector: 'app-add-edit-member',
  templateUrl: './add-edit-member.component.html',
  styleUrls: ['./add-edit-member.component.css']
})
export class AddEditMemberComponent {
  @Input() memberData: any;
  memberForm: FormGroup;
  isEditMode = false;
  memberId: string;
  members!: Member[];

  constructor(
    private fb: FormBuilder,
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    const uid = this.route.snapshot.paramMap.get('id');
    this.memberId = String(uid);

    // Form initialization with form controls
    this.memberForm = this.fb.group({
      userId: [''],
      profileImage: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      nicNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Check if editing or adding a new member
    if (uid) {
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
    }
  }

  ngOnInit(): void {
    this.loadMembers();
    // Fetch member data for edit mode
    if (this.isEditMode) {
      this.memberService.getMemberById(this.memberId).subscribe(
        (data) => {
          console.log('Received member data:', data);
          this.memberForm.patchValue(data);
        },
        (error) => {
          this.toastr.error('Member not found');
        }
      );
    }
  }

  // Handle form submission
  onSubmit(): void {
    if (this.memberForm.invalid) {
      return; // Prevent submission if the form is invalid
    }

    const user = this.memberForm.value;

    if (this.isEditMode) {
      // Update member data
      this.memberService.updateMember(user, this.memberId).subscribe(
        (data) => {
          this.toastr.success('Member updated successfully');
          this.router.navigate(['/members']);
        },
        (error) => {
          this.toastr.error('Failed to update member');
        }
      );
    } else {
      // Create new member
      this.memberService.createMember(user).subscribe(
        (data) => {
          this.toastr.success('Member created successfully');
          this.router.navigate(['/members']);
        },
        (error) => {
          this.toastr.error('Failed to create member');
        }
      );
    }
  }

  // Handle profile image change
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.memberForm.patchValue({
          profileImage: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  }

  // Cancel button handler
  cancel(): void {
    this.memberForm.reset();
  }

  // Load all members (for listing or selecting an existing member)
  loadMembers(): void {
    this.memberService.getMember().subscribe(
      (data) => {
        console.log(data);
        this.members = data;
      },
      (error) => {
        this.toastr.error('Failed to load members');
      }
    );
  }
}
