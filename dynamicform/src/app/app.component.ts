import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../shared/password.validator';
import { forbiddenNameValidator } from '../shared/username.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'dynamicform';
  registrationForm!: FormGroup;

  constructor(private builder:FormBuilder){};

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.registrationForm = this.builder.group({
      userName:['Jishnuvas',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/admin/)]],
      email:[''],
      password:[''],
      subscribe:[false],
      confirmPassword:[''],
      address:this.builder.group({
        city:['',[Validators.required]],
        state:['',[Validators.required]],
        postalcode:['',[Validators.required]]
      }),
      alternateEmails:this.builder.array([])
    });
  }

  get userName() {
    return this.registrationForm?.get('userName');
  }
  get email() {
    return this.registrationForm?.get('email');
  }
  get password() {
    return this.registrationForm?.get('password');
  }
  get city() {
    return this.registrationForm?.get('address')?.get('city')
  }
  get state() {
    return this.registrationForm?.get('address')?.get('state');
  }
  get postalcode() {
    return this.registrationForm?.get('address')?.get('postalcode');
  }   
  get alternateEmails() {
    return this.registrationForm?.get('alternateEmails') as FormArray;
  }
  addAlternateEmail(){
    this.alternateEmails.push(this.builder.control(''))
  }

}
