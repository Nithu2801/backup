export interface Payment{
    filter(arg0: (a: any) => any): Payment[];
    id:string;
    name:string;
    nicNumber:string;
    contactNo:string;
    dueDate:string;

}


export interface Overdue{
    memberId:string;
    programId:string;
    subscriptionType:string;
    dueDate:string;
}
export interface UserPayment{
    memberId:number;
    date:Date;
    amount:number;
    programName:string;
    paymentType:string;
}
export interface Overdue{
    memberId:string;
    programId:string;
    subscriptionType:string;
    dueDate:string;
}
export interface PaymentHistory{
    date:Date;
    amount:number;
    reason:string;
    memberId:number;
    isRefund:boolean;
}
