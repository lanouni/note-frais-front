import { Injectable } from '@angular/core';
import {Consultant} from "./model/Consultant.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public username!:string;
  public password!:string;

  consultant : Consultant = new Consultant();
  constructor(private http : HttpClient) { }

  public login(username : string , password : string):Observable<Consultant> {
    this.consultant.email = username;
    this.consultant.password = password;

    return this.http.post<Consultant>("http://localhost:8080/consultant/login",this.consultant);
  }
  public logout(){
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('id');
    sessionStorage.clear();
  }


}
