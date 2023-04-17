import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Responsbale} from "../model/Responsable.model";
import {Observable} from "rxjs";
import {Consultant} from "../model/Consultant.model";

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  responsable : Responsbale = new Responsbale();

  constructor(private http:HttpClient) { }

  public login(username : string , password : string):Observable<Responsbale>{

    this.responsable.email = username;
    this.responsable.password = password;

    return this.http.post<Responsbale>("http://localhost:8080/login/responsable",this.responsable);

  }

  public logout(){
    sessionStorage.removeItem('email_responsable');
    sessionStorage.removeItem('id_responsable');
    sessionStorage.clear();
  }

  public listConsultant(idResponsable : number):Observable<Array<Consultant>>{
    return this.http.get<Array<Consultant>>("http://localhost:8080/listConsultant/"+idResponsable);
  }

}
