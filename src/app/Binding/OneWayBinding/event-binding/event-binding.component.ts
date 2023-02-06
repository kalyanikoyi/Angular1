import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  name = 'kalyani'
  red = 'red'
  change(){
return this.red = 'blue' , this.name = 'Chalapathi'
  }
}
