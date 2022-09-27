import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  emailId !: string;
  userId !: string;
  password !: string;
  confirmPassword!: string;
  contactNumber !: string;
  usersList: Users[] = [];
  validForm: boolean = true;
  isEmail: boolean = false;
  isUsername: boolean = false;
  isPassword: boolean = false;
  errorMessage: any;
  currentStatus!: String;
  response: any;
  isUserRegisterd: boolean = false;
  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.response = data;
      this.usersList = this.response.data.slice();
    })

  }
  register() {
    this.userId = getUserIdToRegister();
    let user = new Users(this.userId, this.firstName, this.lastName,this.contactNumber, this.emailId, this.password);
    console.log(user);
    this.userService.registserUser(user).subscribe(data => {
      this.response = data;
      console.log("respinse data" + JSON.stringify(this.response));
      if(this.response.response === "User Registered Successfully") {
        this.isUserRegisterd = true;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 5000);
      }
    });
  }
  onCheckUsername() {

  }
  onKeyEmail() {
    this.isEmail = false;
    this.validForm = true;
    for (let i = 0; i < this.usersList.length; i++) {
      if (this.usersList[i].emailId === this.emailId) {
        this.isEmail = true;
        this.validForm = false;
      }
    }
  }
  onpass() {
    if(this.password!=null)
    {
    this.onCheckPassword()
    }

  }
  onCheckPassword() {
    this.validForm = true;
    this.isPassword = false;
    if (this.password != this.confirmPassword) {
      this.isPassword = true;
      this.validForm = false;
    }
  }

}
function getUserIdToRegister(): string {
  return (Math.floor(Math.random() * 1000) + 1).toString();
}

