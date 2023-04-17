import { Component, OnInit } from '@angular/core';
import {DepenseNote, NoteFrais} from "../model/NoteFrais.model";
import {catchError, Observable, throwError} from "rxjs";
import {DepenseNoteService} from "../services/depense-note.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.css']
})
export class DepenseComponent implements OnInit {

  noteFrais!: Observable<NoteFrais>;
  note: NoteFrais = new NoteFrais();
  erreurMessage!:string;
  depense!:Observable<Array<DepenseNote>>;
  id! : any;
  loggedIn!:boolean;


  constructor(private depenseService:DepenseNoteService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('id') == null){
      this.loggedIn = false;

      return ;
    }
    this.loggedIn = true

    // this.depenseService.getNoteFriasById().subscribe(
    //   response=>{
    //     this.noteFrais = response;
    //     console.log(this.noteFrais)
    //     return this.noteFrais;
    //   }
    // );

    this.noteFrais = this.depenseService.getNoteFriasById().pipe();
    this.noteFrais.subscribe(value => {
      this.note = value;

    })



    this.route.queryParams.subscribe(params=>{
      this.id = params['id'];
    })



    if (this.noteFrais == null)
      throwError("note de frais n'existe pas")
    else{
      this.depense = this.depenseService.getDepenseByNoteFraisID().pipe(
        catchError(err => {
          this.erreurMessage = err.erreurMessage;
          return throwError(err);
        })
      )

    }
  }


  handleDelete(id:number) {
    alert("vouler supprimer la depense ?")

    this.depenseService.deleteDepense(id).subscribe(resultat=>{
      console.log(resultat)
    });
  }
}
