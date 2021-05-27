import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { SubmitProfileComponent } from './components/submit-profile/submit-profile.component';
import { ProfileService } from './services/profile.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilesComponent,
    SubmitProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProfileService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
