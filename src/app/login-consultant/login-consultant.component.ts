import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../auth-service.service";
import { Consultant } from '../model/Consultant.model';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login-consultant',
  templateUrl: './login-consultant.component.html',
  styleUrls: ['./login-consultant.component.css']
})
export class LoginConsultantComponent implements OnInit {

  username!:string;
  password! : string;
  errorMessage = "Invalid Credentials";
  successMessage! : string;
  invalidLogin = false;
  loginSuccess = false;
  consultant : Consultant = new Consultant();


  constructor(private authService : AuthServiceService, private  route : Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    this.authService.login(this.username,this.password).subscribe((results) =>{
      this.invalidLogin = false;
      this.loginSuccess = true;


      sessionStorage.setItem('id',String(results.id));
      sessionStorage.setItem('email',this.username);
      console.log(sessionStorage.getItem('id'));
      this.successMessage = 'Login Successful';
      this.route.navigate(['/noteFrais'])
    },()=>{
      this.invalidLogin = true;
      this.loginSuccess = false;
      alert('mot de passe ou email incorect')
    })
  }

  handleLogout(){
    sessionStorage.removeItem('id');
    sessionStorage.clear();
  }

}
