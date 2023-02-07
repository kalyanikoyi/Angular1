import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent {
  show = true;
  display = false;
  true = true;

  value = 5

  details =[{
    name:'kalyani',
    age :26,
    gender : 'Female'
  },
 { name:'Chalapathi',
  age :36,
  gender : 'Male'
},
{ name:'Manasvi',
age :4,
gender : 'Female'
},
{ name:'Manvika',
age :3,
gender : 'Female'
}
]
}
