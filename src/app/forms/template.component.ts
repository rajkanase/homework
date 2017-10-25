import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  myForm : NgForm;
  myData={
    userName :'',
    email : '',
    pass : ''
  };
  constructor() { }

  ngOnInit() {
  }
  
  onSub(myForm : NgForm){
    this.myForm=myForm;
    console.log(this.myForm);
    
  }

}
