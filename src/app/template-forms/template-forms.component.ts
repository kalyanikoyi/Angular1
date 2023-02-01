import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit{
ngOnInit(){

}

submit(formValue:NgForm){
  console.log(formValue.value);
}
loadValues(formValue:NgForm){
  let details ={
    ename:'kalyani',
    }
    formValue.setValue(details);
}
resetForm(formValue:NgForm){
  formValue.reset()
}
}
