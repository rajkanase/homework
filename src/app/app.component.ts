import { Component, OnInit } from '@angular/core';
import { HugeService } from "app/service-comp/huge.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [HugeService]
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.dt = this.ser.dt;
  }
  title = 'app';
  dt: string;

  constructor(
    private ser : HugeService
  ) {
      
  }

  dtCh() {
    this.dt = this.ser.dt;
  }
}
