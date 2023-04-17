import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoteFraisContentComponent } from './note-frais-content/note-frais-content.component';
import { DepenseComponent } from './depense/depense.component';
import { LoginConsultantComponent } from './login-consultant/login-consultant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from "./angular-material.module";
import {HttpClientModule} from "@angular/common/http";
import { AjouterDepenseComponent } from './ajouter-depense/ajouter-depense.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AjouterNoteComponent } from './ajouter-note/ajouter-note.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginResponsableComponent } from './login-responsable/login-responsable.component';
import { ListConsultantComponent } from './list-consultant/list-consultant.component';
import { ListNoteFraisComponent } from './list-note-frais/list-note-frais.component';
import { ListDepenseComponent } from './list-depense/list-depense.component';
import { NavbarResponsableComponent } from './navbar-responsable/navbar-responsable.component';
import { NavbarHomepageComponent } from './navbar-homepage/navbar-homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NoteFraisContentComponent,
    DepenseComponent,
    LoginConsultantComponent,
    AjouterDepenseComponent,
    AjouterNoteComponent,
    HomePageComponent,
    LoginResponsableComponent,
    ListConsultantComponent,
    ListNoteFraisComponent,
    ListDepenseComponent,
    NavbarResponsableComponent,
    NavbarHomepageComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
