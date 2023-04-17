import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {DepenseNote, NoteFrais} from "../model/NoteFrais.model";
import {DepenseNoteService} from "../services/depense-note.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-depense',
  templateUrl: './list-depense.component.html',
  styleUrls: ['./list-depense.component.css']
})
export class ListDepenseComponent implements OnInit {


  erreurMessage!:string;
  depense!:Observable<Array<DepenseNote>>;
  id! : any;
  loggedIn!:boolean;

  constructor(private depenseService:DepenseNoteService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('id_responsable') == null){
      this.loggedIn = false;

      return ;
    }
    this.loggedIn = true
    this.route.queryParams.subscribe(params=>{
      this.id = params['id'];
    })
    console.log(this.id)

    this.depense = this.depenseService.getDepenseByNoteFraisID().pipe(
      catchError(err => {
        this.erreurMessage = err.erreurMessage;
        return throwError(err);
      })
    )
    console.log(this.depense.subscribe(val=>console.log(val[0])))
  }


  handleDelete(id: number) {

  }
}
