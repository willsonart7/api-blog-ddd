import { EmailServiceInterface } from "./email.service.interface";

export class MailChimpService implements EmailServiceInterface {


    public sendEmail(email: string, name: string): void {
        // sendemal
        console.log("Send email mailchimp", email)
    }
}