import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './feature/register/register.component';
import { LoginComponent } from './feature/login/login.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { HomeComponent } from './feature/home/home.component';
import { ReadLaterComponent } from './feature/read-later/read-later.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/auth.guard';
import { NgxUiLoaderConfig, NgxUiLoaderModule } from 'ngx-ui-loader';
import { NavbarComponent } from './shared/navbar/navbar.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig ={

  fgsColor: '#32CD32',

  pbColor: '#32CD32',

  };


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    ReadLaterComponent,
    NavBarComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
     ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),


  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
