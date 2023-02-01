import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit{
  use:any;
  show=false
  formDetails: any;
  constructor(private usersService:UsersService){

  }
 @ViewChild('stdForm') form:any;
 ngOnInit(){
   this.getDetails();
   
}
getDetails(){
  this.usersService.getUsers().subscribe(data=>{
    this.use =data
  })
}

submit(formValue:NgForm){
 console.log(formValue.value)
 this.usersService.postUsers(formValue.value).subscribe((res)=>{
  console.log(res);
  
 })
}
showForm(){
  this.show=true
}
editDetails(id:any){
 let curentDet = this.use.find((p:any)=>{return p.id === id})
console.log(curentDet);
this.show=true
console.log(this.form);

// this.form.setValue({
//   sName :'curentDet.sName',
//   age : 'curentDet.age',
//   gender:'curentDet.gender'
// })

}
deleteDetails(id:any){
this.usersService.deleteUsers(id).subscribe();
confirm('are you sure')
console.log(id);

}
}

