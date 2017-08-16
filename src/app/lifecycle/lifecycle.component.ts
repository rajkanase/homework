import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input
} from '@angular/core';
import { HugeService } from "app/service-comp/huge.service";

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
 
})
export class LifecycleComponent implements
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  inData: string;
  constructor(
    private ser : HugeService
  ) { }

  ngOnChanges(): void {
    this.l(`ngOnChanges`)
  }

  ngOnInit() {
    this.l(`ngOnInit`)

    this.dtIn()
  }

  ngDoCheck(): void {
    this.l(`ngDoCheck`)
  }

  ngAfterContentInit(): void {
    this.l(`ngAfterContentInit`)
  }

  ngAfterContentChecked(): void {
    this.l(`ngAfterContentChecked`)
  }

  ngAfterViewInit(): void {
    this.l(`ngAfterViewInit`)
  }

  ngAfterViewChecked(): void {
    this.l(`ngAfterViewChecked`)
  }

  ngOnDestroy(): void {
    this.l(`ngOnDestroy`)
  }

  l(msg: string) {
    console.log(msg);
  }

  dtIn() {
    this.ser.dt = this.ser.latstDt();
    this.inData = this.ser.dt;
  }
}
