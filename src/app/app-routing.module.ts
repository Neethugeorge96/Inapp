import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { ReadLaterComponent } from './feature/read-later/read-later.component';
import { RegisterComponent } from './feature/register/register.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'home', component: HomeComponent, canActivate:[AuthGuard], },
  { path: 'profile', component: ProfileComponent,canActivate:[AuthGuard], },
  { path: 'readlater', component: ReadLaterComponent,canActivate:[AuthGuard], },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
