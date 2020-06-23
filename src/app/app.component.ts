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
      'weak': texto.length < 4,
      'medium': texto.length >= 4 && texto.length <= 7,
      'strong': texto.length > 7
    }

  }

}
