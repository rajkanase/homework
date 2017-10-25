import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { SizerDirective } from './directive/sizer.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ServiceCompComponent } from './service-comp/service-comp.component';
import { HugeService } from "app/service-comp/huge.service";
import { FormsComponent } from './forms/forms.component';
import { TemplateComponent } from './forms/template.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    SizerDirective, 
    LifecycleComponent,
    ServiceCompComponent,
    FormsComponent,
    TemplateComponent,
    InputComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers : [HugeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
