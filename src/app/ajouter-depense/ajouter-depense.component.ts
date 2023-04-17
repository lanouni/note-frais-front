import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DepenseNote} from "../model/NoteFrais.model";
import {DepenseNoteService} from "../services/depense-note.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouter-depense',
  templateUrl: './ajouter-depense.component.html',
  styleUrls: ['./ajouter-depense.component.css']
})
export class AjouterDepenseComponent implements OnInit {
  newDepenseFormGroup!: FormGroup;
  loggedIn!:boolean;
  id ! : string;

  constructor(private  fb : FormBuilder,
              private depenseService:DepenseNoteService,
              private route : Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('id') == null){
      this.loggedIn = false;

      return ;
    }
    this.loggedIn = true
    this.newDepenseFormGroup = this.fb.group({
      date : this.fb.control(null),
      description : this.fb.control(null),
      taxi : this.fb.control(null),
      hotel : this.fb.control(null),
      repas : this.fb.control(null),
      Hebergement : this.fb.control(null),
    });
  }

  handleSaveDepense() {
    let depense:DepenseNote = this.newDepenseFormGroup.value;
    this.depenseService.saveDepense(depense).subscribe({
      next : data=>{
        alert("depense ajouter avec success")
        this.route.navigate(['/noteFrais'])
      },
      error:err=>{
        console.log(err);
      }

    });
  }
}
