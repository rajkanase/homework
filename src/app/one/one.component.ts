import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  @Output()
  oneEvt:EventEmitter<string>
  
  constructor() {
    this.oneEvt= new EventEmitter<string>();
  }

  onBut(value:string){
    console.log(value);    
    this.oneEvt.emit(value);

  }

  ngOnInit() {
  }

}
