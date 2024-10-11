import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./component/login/login.component";
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,CommonModule, ButtonModule],
  templateUrl: './app.component.html',
  animations: [
    trigger('enableCard', [
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
      transition('open <=> closed', [animate('0.6s 200ms ease-in-out')]),
    ])
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'vendor-login';
  enableAnimation: boolean = false;
  
  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.enableAnimation = true;
    }, 500)
  }
}
