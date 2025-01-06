import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  imports: [ ReactiveFormsModule, NgIf ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  clientForm: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    dob: new FormControl("", Validators.required),
    occupation: new FormControl("", Validators.required),
    district: new FormControl("", Validators.required),
    smoking: new FormControl("", Validators.required),
  })

  onSend(){
    const formValue = this.clientForm.value;
    console.log(formValue)
  }
  onModalClose() {
    this.clientForm.reset();
  }
}
