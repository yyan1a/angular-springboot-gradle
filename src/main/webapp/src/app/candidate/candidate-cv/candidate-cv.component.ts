import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidate-cv',
  templateUrl: './candidate-cv.component.html',
  styleUrls: ['./candidate-cv.component.css']
})
export class CandidateCvComponent implements OnInit {

  //binding data from Parent component to child component
  @Input('firstName') firstName: string;
  @Input('lastName') lastName: string;
  @Input('country') country: string;
  @Input('availableAfter') availableAfter: string
  
  constructor() { }

  ngOnInit() {
  }

}
