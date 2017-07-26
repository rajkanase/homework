import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  pqr;
  bord;
  bgcolor;
  cmpny;

  constructor() {
    this.cmpny=[
      'Dell',
      'HP',
      'Samsung',
      'Coolpad',
      'Motorola',
      'Lenovo'
      ];

    this.pqr=true;
    this.bord="2px solid red";
    this.bgcolor="blue";
   }

  ngOnInit() {
  }

  reverse(){
    this.pqr=!this.pqr;
  }

}
