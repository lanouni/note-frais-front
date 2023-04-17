import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoteFraisContentComponent} from "./note-frais-content/note-frais-content.component";
import {DepenseComponent} from "./depense/depense.component";
import {AjouterNoteComponent} from "./ajouter-note/ajouter-note.component";
import {AjouterDepenseComponent} from "./ajouter-depense/ajouter-depense.component";
import {LoginConsultantComponent} from "./login-consultant/login-consultant.component";
import {LoginResponsableComponent} from "./login-responsable/login-responsable.component";
import {ListConsultantComponent} from "./list-consultant/list-consultant.component";
import {ListNoteFraisComponent} from "./list-note-frais/list-note-frais.component";
import {ListDepenseComponent} from "./list-depense/list-depense.component";
import {HomePageComponent} from "./home-page/home-page.component";


const routes: Routes = [
  {
    path:"noteFrais",
    component : NoteFraisContentComponent
  },
  {
    path:"add/noteFrais",
    component : AjouterNoteComponent
  },
  {
    path:"depense",
    component : DepenseComponent
  },
  {
    path:"add/depense",
    component : AjouterDepenseComponent
  },
  {
    path:"login/consultant",
    component : LoginConsultantComponent
  },
  {
    path:"login/responsable",
    component:LoginResponsableComponent
  },
  {
    path:"responsable/consultants",
    component: ListConsultantComponent
  },
  {
    path:"responsable/consultant",
    component: ListNoteFraisComponent
  },
  {
    path:"responsable/consultant/noteFrais",
    component: ListDepenseComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
