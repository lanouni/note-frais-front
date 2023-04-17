import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {NoteFrais} from "../model/NoteFrais.model";
import {NoteFraisService} from "../services/note-frais.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-note-frais',
  templateUrl: './list-note-frais.component.html',
  styleUrls: ['./list-note-frais.component.css']
})
export class ListNoteFraisComponent implements OnInit {

  noteFrais!: Observable<Array<NoteFrais>>;
  errorMessage!: string;
  loggedIn!:boolean;
  id ! : string;

  constructor(private noteFraisService : NoteFraisService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('id_responsable') == null){
      this.loggedIn = false;

      return ;
    }
    this.loggedIn = true;



    this.route.queryParams.subscribe(params=>{
      this.id = params['id'];
    })
    console.log(this.id)
    this.noteFrais = this.noteFraisService.getAllNoteFraisById(Number(this.id)).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }
}
