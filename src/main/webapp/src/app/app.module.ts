import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import {CandidateService} from "./candidate/candidate.service";
import { CandidateCvComponent } from './candidate/candidate-cv/candidate-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    CandidateCvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
