import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
name = 'kalyani';    // string //
age = 26  // number //
names = ['kalyani','Chalapathi']  // Array  //

empDetails =[{            //  object //
  fname:'kalyani',
  lname:'putta',
},
{
  fname :'Chalapathi',
  lname : 'koyi',
}]

function(){                // function //
  return 'This is function'
}
}
