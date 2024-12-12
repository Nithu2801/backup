import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './Component/Admin/member/member.component';
import { ProgramComponent } from './Component/Admin/program/program.component';
import { SubscriptionComponent } from './Component/Admin/subscription/subscription.component';
import { PaymentComponent } from './Component/Admin/payment/payment.component';
import { DashboardComponent } from './Component/Admin/dashboard/dashboard.component';
import { AddEditMemberComponent } from './Component/Admin/add-edit-member/add-edit-member.component';
import { AddEditProgramComponent } from './Component/Admin/add-edit-program/add-edit-program.component';

import { OverdueComponent } from './Component/Admin/overdue/overdue.component';
import { AddEditSubscriptionComponent } from './Component/Admin/add-edit-subscription/add-edit-subscription.component';
import { ViewMemberComponent } from './Component/Admin/view-member/view-member.component';
import { WebsiteComponent } from './Component/Main/website/website.component';
import { HomeComponent } from './Component/Main/home/home.component';
import { GalleryComponent } from './Component/Main/gallery/gallery.component';
import { ContactUsComponent } from './Component/Main/contact-us/contact-us.component';
import { LoginComponent } from './Component/Main/login/login.component';
import { UserHomeComponent } from './Component/User/user-home/user-home.component';
import { UserComponent } from './Component/User/user/user.component';
import { ViewProgramComponent } from './Component/Admin/view-program/view-program.component';
import { ViewSubscriptionComponent } from './Component/Admin/view-subscription/view-subscription.component';
import { MemberPaymentComponent } from './Component/User/member-payment/member-payment.component';
import { EnrollmentComponent } from './Component/Admin/enrollment/enrollment.component';
import { ReportComponent } from './Component/Admin/report/report.component';
import { MemberPayComponent } from './Component/User/member-pay/member-pay.component';
import { EnrolledProgramsComponent } from './Component/User/enrolled-programs/enrolled-programs.component';

const routes: Routes = [
  
  {
    path:'GrandeurGym',
    component:WebsiteComponent,
    children:[
      {path:'',component:HomeComponent},
      {path:'gallery',component:GalleryComponent},
      {path:'contactUs',component:ContactUsComponent},
     
    ]
  },
  {path:'login',component:LoginComponent},
  {
    path:'admin', 
    component:DashboardComponent,
    children:[
      {path:'member' , children:[
         {path:'',component:MemberComponent },
        {path :'editMember/:id',component:AddEditMemberComponent},
        {path:'viewMember/:id',component:ViewMemberComponent},
        { path: 'enrollment/:id', component: EnrollmentComponent } 


      ] },
       {path:'program',children:[
        {path:'',component:ProgramComponent },
        {path :'editProgram/:id',component:AddEditProgramComponent},
        {path:'viewProgram/:id',component:ViewProgramComponent}
       ]},
       {path: 'subscription',children:[
        {path:'',component:SubscriptionComponent },
        {path :'editSubscription/:id',component:AddEditSubscriptionComponent},
        {path:'viewSubscription/:id',component:ViewSubscriptionComponent}
      ]},
      {path: 'payment', component: PaymentComponent},
      {path:'report', component:ReportComponent}
      // { path: 'enrollment/:memberId', component: EnrollmentComponent } // Add the Enrollment Component Route

]},

  {
    path:'user/:id',
    component:UserComponent,
    children:[
      {path:'',component:UserHomeComponent},
      {path:'userPayment/:id',component:UserHomeComponent},
    ]
  },
  {path:'program',children:[
    {path:'',component:ProgramComponent },
    
    {path:'viewProgram/:id',component:ViewProgramComponent},

   ]},
   {path:'member-pay',component:MemberPayComponent},

   {path:'entrolled-programs',component:EnrolledProgramsComponent},

  {path: 'payment',
   component: PaymentComponent,
    children:[
      
      {path:'payment',children:[
        // {path:'member-pay',component:MemberPayComponent}
        // {path:'overdue',component:OverdueComponent},
        // {path:'member-payment',component:MemberPaymentComponent}
       ]}     ]
  },
  { path: '', redirectTo: '/GrandeurGym', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


