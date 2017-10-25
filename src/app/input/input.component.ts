import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input()
  public demo;

  @Output()
  demoEvnt=new EventEmitter<string>()

  onchange(value:string){
    this.demoEvnt.emit(value);
  }

  constructor(
    
  ) { }

  ngOnInit() {
  }

}
