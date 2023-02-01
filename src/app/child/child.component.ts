import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() parent: any;
  @Input() cName :any;
  @Output() sendDetails = new EventEmitter
  
  clickOn(){
    const details =[{
      name:'kalyani',age:26,gender:'female'
    }]
    this.sendDetails.emit(details)
    
  }
  
}
