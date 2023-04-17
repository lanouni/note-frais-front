import { Component, OnInit } from '@angular/core';
import {NoteFrais} from "../model/NoteFrais.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NoteFraisService} from "../services/note-frais.service";

@Component({
  selector: 'app-ajouter-note',
  templateUrl: './ajouter-note.component.html',
  styleUrls: ['./ajouter-note.component.css']
})
export class AjouterNoteComponent implements OnInit {
  newNoteFormGroup!: FormGroup;
  loggedIn!:boolean;
  id ! : string;

  constructor(private fb : FormBuilder,
              private noteService:NoteFraisService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('id') == null){
      this.loggedIn = false;

      return ;
    }
    this.loggedIn = true

    this.newNoteFormGroup = this.fb.group({
      date : this.fb.control(null),
      client : this.fb.control(null),
      projet : this.fb.control(null),
      status : this.fb.control(null),
      typeIntervention : this.fb.control(null),
      remarque : this.fb.control(null),

    })
  }

  handleSaveNote() {
    let note:NoteFrais = this.newNoteFormGroup.value;
    this.noteService.saveNoteFrais(note).subscribe({
        next:data=>{
          alert("note ajouter avec success");
        },
        error : err=>{
          console.log("erreur");
        }
      }
    )
  }
}
