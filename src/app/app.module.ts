import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { SizerDirective } from './directive/sizer.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ServiceCompComponent } from './service-comp/service-comp.component';
import { HugeService } from "app/service-comp/huge.service";

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    SizerDirective,
    LifecycleComponent,
    ServiceCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers : [HugeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
