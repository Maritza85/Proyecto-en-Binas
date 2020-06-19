import { Component, OnInit } from '@angular/core';
import{ FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import{debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})
export class FormAppComponent implements OnInit {

 form: FormGroup;

  constructor(
    private formBuilder:FormBuilder
  ){
    this.buildFrom();
  }
    
  ngOnInit(){ }

  private buildFrom(){
    this.form = this.formBuilder.group({
      name: ['',  [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.maxLength(80)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }
  

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    }else{
      this.form.markAllAsTouched();
    }
  }
}
