import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NoteFrais,DepenseNote} from "../model/NoteFrais.model";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DepenseNoteService {

  id! : any;
  constructor(private http : HttpClient,private route: ActivatedRoute) { }

  public getNoteFriasById(){

    return this.http.get<NoteFrais>("http://localhost:8080/noteFrais/1");
  }
  public getDepenseByNoteFraisID(){
    this.route.queryParams.subscribe(params=>{
      this.id = params['id'];
    })

    return this.http.get<Array<DepenseNote>>("http://localhost:8080/ListDepensebyID/"+this.id);
  }

  public saveDepense(depense:DepenseNote):Observable<DepenseNote>{
    this.route.queryParams.subscribe(params=>{
      this.id = params['id'];
    })
    return  this.http.post<DepenseNote>("http://localhost:8080/noteFrais/"+this.id+"/Depense",depense);
  }

  public deleteDepense(idDepense : number){
    return this.http.delete("http://localhost:8080/delete/depense/"+idDepense);
  }
}
