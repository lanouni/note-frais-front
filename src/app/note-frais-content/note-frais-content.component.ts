import { Component, OnInit } from '@angular/core';
import {NoteFraisService} from "../services/note-frais.service";
import {catchError, Observable, throwError} from "rxjs";
import {NoteFrais} from "../model/NoteFrais.model";

@Component({
  selector: 'app-note-frais-content',
  templateUrl: './note-frais-content.component.html',
  styleUrls: ['./note-frais-content.component.css']
})
export class NoteFraisContentComponent implements OnInit {

  noteFrais!: Observable<Array<NoteFrais>>;
  errorMessage!: string;
  loggedIn!:boolean;
  id ! : string;

  constructor(private noteFraisService : NoteFraisService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('id') == null){
      this.loggedIn = false;

      return ;
    }
    this.loggedIn = true;


    console.log(this.id)

    this.noteFrais = this.noteFraisService.getAllNoteFriasById().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }


}
