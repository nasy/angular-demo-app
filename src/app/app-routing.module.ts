import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { SubmitProfileComponent } from './components/submit-profile/submit-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'submit-profile', component: SubmitProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
