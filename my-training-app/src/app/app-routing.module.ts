import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MenuCentralComponent } from './menu-central/menu-central.component';
import { PersonalTrainerComponent } from './personal-trainer/personal-trainer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymMembershipComponent } from './gym-membership/gym-membership.component';

const routes: Routes = [

  {
    pathMatch: 'full',
    path: '',
    component: GymMembershipComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
