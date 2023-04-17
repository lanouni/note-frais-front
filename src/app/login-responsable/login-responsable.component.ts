import { Component, OnInit } from '@angular/core';
import {ResponsableService} from "../services/responsable.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-responsable',
  templateUrl: './login-responsable.component.html',
  styleUrls: ['./login-responsable.component.css']
})
export class LoginResponsableComponent implements OnInit {
  username!:string;
  password! : string;
  errorMessage = "Invalid Credentials";
  successMessage! : string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private responsableService : ResponsableService,private route: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    this.responsableService.login(this.username,this.password).subscribe(resultat=>{
      this.invalidLogin = false;
      this.loginSuccess = true;


      sessionStorage.setItem('id_responsable',String(resultat.id));
      sessionStorage.setItem('email_responsable',this.username);
      console.log(sessionStorage.getItem('id_responsable'));
      this.successMessage = 'Login Successful';
      this.route.navigate(['/responsable/consultants'])
    },()=>{
      this.invalidLogin = true;
      this.loginSuccess = false;
      alert('mot de passe ou email incorect')
    })
  }

}
