import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica1';
  name='Maritza';


  onSaludar(mensaje){
    console.log(mensaje)
  }

}