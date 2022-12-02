import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TemplateFormsComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
