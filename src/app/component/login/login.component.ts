import { JsonPipe } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
  ],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 0,
        })
      ),
      state(
        'closed',
        style({
          opacity: 1,
        })
      ),
      transition('open => closed', [animate('350ms 50ms ease-in')]),
    ]),
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements DoCheck {
  password: string = '';
  title: string = 'Welcome, Please fill form';
  vendor: any = {};
  result: any;
  isOpen: boolean = false;
  enableButton: boolean = false;
  sumbitButtonStyle: string = '';

  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

  enabledButton(value: any) {
    let length = Object.keys(value).length;
    if (length > 1) {
      this.enableButton = true;
      this.sumbitButtonStyle = 'p-button-success';
    }
    console.log('values change', length);
  }
  submitForm(value: any) {
    this.isOpen = !this.isOpen;
    console.log('submit', value);
    this.vendor = {};
    this.enableButton = false;
    this.sumbitButtonStyle = '';
    this.title = 'Thank you';
  }
  ngDoCheck(): void {
    this.enabledButton(this.vendor);
  }
}
