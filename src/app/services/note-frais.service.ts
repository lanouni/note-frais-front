import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NoteFrais} from "../model/NoteFrais.model";
import {Observable} from "rxjs";
import {Consultant} from "../model/Consultant.model";

@Injectable({
  providedIn: 'root'
})
export class NoteFraisService {

  email : any;
  consultant : Consultant = new Consultant();
  id! : number;

  constructor( private http : HttpClient) { }

  public getAllNoteFriasById(){
    this.id = Number(sessionStorage.getItem('id'));
    console.log(this.id);
    return this.http.get<Array<NoteFrais>>("http://localhost:8080/allnoteFrais/"+this.id);
  }
  public getAllNoteFraisById(id : number){
    return this.http.get<Array<NoteFrais>>("http://localhost:8080/allnoteFrais/"+id);
  }

  public saveNoteFrais(note:NoteFrais):Observable<NoteFrais>{
    this.id = Number(sessionStorage.getItem('id'));
    console.log(this.id);
    return this.http.post<NoteFrais>("http://localhost:8080/consultant/"+this.id+"/NoteFrais",note);
  }
}
