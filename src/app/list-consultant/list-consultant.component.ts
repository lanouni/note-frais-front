import { Component, OnInit } from '@angular/core';
import {ResponsableService} from "../services/responsable.service";
import {catchError, Observable, throwError} from "rxjs";
import {NoteFrais} from "../model/NoteFrais.model";
import {Consultant} from "../model/Consultant.model";

@Component({
  selector: 'app-list-consultant',
  templateUrl: './list-consultant.component.html',
  styleUrls: ['./list-consultant.component.css']
})
export class ListConsultantComponent implements OnInit {

  consultant!: Observable<Array<Consultant>>;
  errorMessage!: string;
  loggedIn!:boolean;
  id! : string;

  constructor(private resposableService : ResponsableService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('id_responsable') == null){
      this.loggedIn = false;

      return ;
    }
    this.loggedIn = true;

    let id = sessionStorage.getItem('id_responsable');

    console.log(id)

    this.consultant = this.resposableService.listConsultant(Number(id)).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );

  }

}
