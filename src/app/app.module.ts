import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaludarComponent } from './componentes/saludar.component';
import{ FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormAppComponent } from './componentes/form-app/form-app.component';


@NgModule({
  declarations: [
    AppComponent,
    SaludarComponent,
    FormAppComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
