import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../auth-service.service";

@Component({
  selector: 'app-navbar-responsable',
  templateUrl: './navbar-responsable.component.html',
  styleUrls: ['./navbar-responsable.component.css']
})
export class NavbarResponsableComponent implements OnInit {

  logged!:boolean;
  email : any;

  constructor(private authService : AuthServiceService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('email_responsable')){

      this.logged = true;
      this.email = sessionStorage.getItem('email_responsable');

    }
    else{
      this.logged = false;


    }

  }

  handlelogout() {
    this.authService.logout();
    this.logged = false;
  }
}
