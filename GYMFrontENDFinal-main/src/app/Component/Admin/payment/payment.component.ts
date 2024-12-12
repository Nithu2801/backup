import { Component, OnInit } from '@angular/core';
import { Payment } from '../../../Interfaces/payment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PaymentService } from '../../../Services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {

  payments: Payment[] = []; 
  filteredPayments: Payment[] = []; 
  searchText: string = '';
  

  constructor(
    private paymentService: PaymentService, 
    private toastr: ToastrService, 
    private router: Router
  ) { }

  ngOnInit(): void {
   
    this.loadPayments();
  }

  
  loadPayments(): void {
    
  
  }

  
  onSearch(): void {
    if (this.searchText.trim()) {
    
      this.filteredPayments = this.payments.filter(payment =>
        payment.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        payment.nicNumber.toLowerCase().includes(this.searchText.toLowerCase()) ||
        payment.contactNo.includes(this.searchText)
      );
    } else {
  
      this.filteredPayments = [...this.payments];
    }
  }

 
  goToPayment(paymentId: number): void {
    this.router.navigate(['/payment/pay', paymentId]);
  }

  goToPaymentHistory(paymentId: number): void {
    this.router.navigate(['/payment/payment-history', paymentId]);
  }

}
