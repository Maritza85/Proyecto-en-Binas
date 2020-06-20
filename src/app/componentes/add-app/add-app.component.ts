import { Component, OnInit } from '@angular/core';
import{ FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import{debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.css']
})
export class AddAppComponent implements OnInit {
  
 

  form: FormGroup;
  constructor(
    private formBuilder:FormBuilder
  ) { 
    this.buildFrom();
  }

  ngOnInit(): void {
  }

  private buildFrom(){
    this.form = this.formBuilder.group({
      Id: ['', [Validators.required, Validators.min(100), Validators.max(105)]],
      nombre: ['',  Validators.required],
      gender: ['', Validators.required],
      nacimiento: ['',  [Validators.required, Validators.min(1980), Validators.max(2010)]],
    });
  }
  
  agregar(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    }else{
      this.form.markAllAsTouched();
    }
  }
  onclick(){

  }
}
