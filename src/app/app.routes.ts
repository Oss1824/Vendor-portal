import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundPageComponent },
];
