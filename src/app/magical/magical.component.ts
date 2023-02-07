import { Component } from '@angular/core';

@Component({
  selector: 'app-magical',
  templateUrl: './magical.component.html',
  styleUrls: ['./magical.component.css']
})
export class MagicalComponent {
  customerName="";
  customerage = 0
  show=false

  showThese(){
    return this.show=true
  }

  memDetails=[
    {
      name:'chalapathi',
      designation:'CEO',
    },
    {
    name:'kalyani',
    designation:'Manager',
  },
{
  name:'Manu',
  designation:'Ass.manager',
}
]
pubpass(){
  if(this.customerage >= 21){
    return "success";
  }else{
    return "failure";
}
}
gympass(){
  if(this.customerage>=10){
    return "success";
  }else{
    return "failure"
  }
}


}
