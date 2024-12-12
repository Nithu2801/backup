import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-pay',
  templateUrl: './member-pay.component.html',
  styleUrls: ['./member-pay.component.css']
})
export class MemberPayComponent implements OnInit {
  paymentForm: FormGroup;
  paymentResponse: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize form with default values
    this.paymentForm = this.fb.group({
      userId: ['', Validators.required],
      programId: ['', Validators.required],
      paymentAmount: ['', [Validators.required, Validators.min(1)]],
      paymentDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  // Method to handle form submission
  onSubmit(): void {
    if (this.paymentForm.invalid) {
      return;  // Stop if form is invalid
    }

    // Construct the payment data from the form values
    const paymentData = this.paymentForm.value;

    // Call the API to add the program payment
    this.addProgramPayment(paymentData).subscribe(
      (response) => {
        this.paymentResponse = response;  // Handle successful response
        console.log('Payment added successfully:', response);
      },
      (error) => {
        console.error('Error adding payment:', error);
        this.paymentResponse = error; // Display the error response to the user if needed
      }
    );
  }

  // Method to call the API endpoint
  addProgramPayment(paymentData: any): Observable<any> {
    const apiUrl = 'http://localhost:5278/api/Admin/AddProgramPayment';
    return this.http.post<any>(apiUrl, paymentData);
  }
}
