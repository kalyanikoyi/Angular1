import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { MagicalComponent } from './magical/magical.component';
import { PracticeComponent } from './practice/practice.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent,
    PipesComponent,
    MagicalComponent,
    PracticeComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
