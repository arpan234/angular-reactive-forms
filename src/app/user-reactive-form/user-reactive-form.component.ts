import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
