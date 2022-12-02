import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})

export class BindingComponent {
  name='kalyani'
  Array=['kalyani','chalapathi','manasvi','manvika']
  color="green"
  enable="true"
  src="https://cdn.pixabay.com/photo/2021/11/22/05/02/dalmatian-6815838_1280.jpg"
  alt="kalyani"
  link="https://www.naukri.com/mnjuser/profile?id=&altresid"
  num=2
  variable="green"
  mytext=true
  required=false
  data=''
  details(){
    return "welcome "+ this.name
  }
  stdDetails={
    name:'kalyani',
    age : 26
    }
    isEnable(){
      this.name="chalapathi"
    }
    group={
     'textcolor':this.mytext,
     'textstyle':this.mytext
    }
    mystyles={
      color:'green',
      fontstyle:'italic',
      fontsize:'50px'
    }
    
}
