export class Users {
    userId!: String
    firstName!: String
    lastName!: String
    contactNumber!: String
    emailId!: String
    password!: String

    constructor(userId: String,firstName: String, lastName: String,contactNumber:String, emailId: String, password: String) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.contactNumber = contactNumber;
        this.password = password;
    }
}
