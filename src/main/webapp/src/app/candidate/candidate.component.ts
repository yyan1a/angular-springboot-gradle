import { Component, OnInit, Input } from '@angular/core';
import {Response} from "@angular/http";
import { FormControl, FormGroup } from '@angular/forms';
import { Candidate } from "./candidate.model";
import { Country } from "./country.model";
import { CandidateService } from "./candidate.service";

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  countries: Country[] = [];
  
  submitted = false;
  
  onSubmit() { this.submitted = true; }
  
  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
  	this.candidateService.getCountries()
            .subscribe(
                (countries: any[]) => {
                    this.countries = countries
                },
                (error) => console.log(error)
            );
  }

}
