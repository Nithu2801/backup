export interface Subscription{
    id:string;
    title:string;
    description:string;
    duration:number;
    isNewSubscription:boolean;
    programNames:string[];
    isSpecialOffer:boolean;
    paymentType:string;
    paymentDate:number;
    userCanPay:boolean;

}