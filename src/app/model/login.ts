export class Login
{
    password!: string;
    emailId!: string;

    constructor(emailId: string,password: string)
    {
        this.emailId = emailId;
        this.password = password; 

    }
}