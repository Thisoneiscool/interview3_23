import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formName: any;
  formMessage: any;
  formSubmitted: boolean = false
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.formSubmitted = true
      this.formName = this.contactForm.get('name') 
      this.formMessage = this.contactForm.get('message')
    }
  }
}
