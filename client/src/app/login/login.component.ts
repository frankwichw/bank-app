import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core/src/render3';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: ''
  };

  // initializing username and password to be given a value later
  username: string;
  password: string;

  handleUsernameInput(event: any) {
    this.username = event.target.value;
  }; 

  handlePasswordInput(event: any) {
    this.password = event.target.value;
  };
  
  // enabling enter press on password to log in
  handleEnterPress(event: any) {
    this.password = event.target.value; 
    if (event.key === "Enter") {
      this.handleLoginClick();
    }
  }

  handleLoginClick() {
    event.preventDefault;
    // console.log(`username: ${this.username}\npassword: ${this.password}`);
    console.log (this.account);
    // log in user, this should be a service? 
    // assuming that this should take the username and password  
    // send them to a service that determiens if it's a valid user and pass
    if (this.username === "test" && this.password === "password") {
      alert("well, you will be logged in eventually, i guess. you got the password right");
    } else {
      alert("sorry you got the wrong username/password");
    }
  };

  constructor() { 
  }

  ngOnInit() {
  }

}
