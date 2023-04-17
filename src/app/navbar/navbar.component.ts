import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../auth-service.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logged!:boolean;
  email : any;

  constructor(private authService : AuthServiceService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('email')){

      this.logged = true;
       this.email = sessionStorage.getItem('email');

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
