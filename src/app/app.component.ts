import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica1';
  name='Maritza';
  hideme={};
  public variable:boolean;



  onSaludar(mensaje){
    console.log(mensaje)
  }

}
