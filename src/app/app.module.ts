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
import { InterpolationComponent } from './Binding/OneWayBinding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './Binding/OneWayBinding/property-binding/property-binding.component';
import { StyleBindingComponent } from './Binding/OneWayBinding/style-binding/style-binding.component';
import { ClassBindingComponent } from './Binding/OneWayBinding/class-binding/class-binding.component';
import { AttributeBindingComponent } from './Binding/OneWayBinding/attribute-binding/attribute-binding.component';
import { EventBindingComponent } from './Binding/OneWayBinding/event-binding/event-binding.component';
import { TwowayBindingComponent } from './Binding/TwoWayBinding/twoway-binding/twoway-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent,
    PipesComponent,
    MagicalComponent,
    PracticeComponent,
    ParentComponent,
    ChildComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    AttributeBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent
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
