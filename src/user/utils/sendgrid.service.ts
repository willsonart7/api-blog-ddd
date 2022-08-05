

export class SendgridServise {

    constructor() { }

    public sendEmail(user) {
        console.log("Uso de Sendgrid")
        console.log("Envio correo al usuario", user.email)
    }

}