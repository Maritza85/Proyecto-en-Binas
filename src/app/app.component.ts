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

  validando(texto:string){
    return{
      'weak' : texto.length < 5,
      'progress-bar bg-danger':texto.length < 5,
      'medium': texto.length >= 5 && texto.length < 9,
      'progress-bar bg-warning': texto.length >= 5 && texto.length < 9,
      'strong': texto.length >=9,
      'progress-bar bg-successs': texto.length >=9
    }

  }

}
