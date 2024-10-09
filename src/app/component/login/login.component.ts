import { JsonPipe, NgIf } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    NgIf,
    ButtonModule,
    InputTextModule,
    FloatLabelModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements DoCheck {
  password: string = '';
  vendor: any = {};
  result: any;
  enableButton: boolean = false;
  sumbitButtonStyle: string = '';

  enabledButton(value: any) {
    let length = Object.keys(value).length;
    if (length > 1) {
      this.enableButton = true;
      this.sumbitButtonStyle = 'p-button-success';
    }
    console.log('values change', length);
  }
  submitForm(value: any){
    console.log("submit", value);
    this.vendor = {}
    this.enableButton = false;
    this.sumbitButtonStyle = '';  
  }
  ngDoCheck(): void {
    this.enabledButton(this.vendor);
  }
}
