import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, DoCheck } from '@angular/core';
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
    trigger('buttonColor', [
      state(
        'open',
        style({
          opacity: 1
        })
      ),
      state(
        'closed',
        style({
          opacity: 0
        })
      ),
      transition('open <=> closed', [animate('0.6s 100ms ease-in-out')]),
    ])
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements DoCheck , AfterViewInit {
  showHeader: boolean = false;
  enableButton: boolean = false;

  title: string = 'Welcome, Please fill form';
  vendor: any = {};
  result: any;
  isOpen: boolean = false;

  ngAfterViewInit(): void {
      setTimeout(()=>{
          this.showHeader = true;
      }, 500)
  }

  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

  enabledButton(value: any) {
    let length = Object.keys(value).length;
    if (length > 1) {
      this.enableButton = true;
    }
    console.log('values change', length);
  }
  submitForm(value: any) {
    this.isOpen = !this.isOpen;
    this.vendor = {};
    this.enableButton = false;
    this.title = 'Thank you';
  }

  ngDoCheck(): void {
    this.enabledButton(this.vendor);
  }
}
