import { EmailServiceInterface } from "./email.service.interface"

export class SendgridServise implements EmailServiceInterface {

    constructor() { }

    public sendEmail(userEmail: string, userName: string) {
        console.log("Uso de Sendgrid")
        console.log("Envio correo al usuario", userEmail)
    }

}