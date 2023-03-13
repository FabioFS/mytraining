import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


import { PersonalTrainerComponent } from './personal-trainer/personal-trainer.component';
import { HeaderComponent } from './decotator/header/header.component';
import { FooterComponent } from './decotator/footer/footer.component';
import { ContentComponent } from './decotator/content/content.component';
import { MenuCentralComponent } from './menu-central/menu-central.component';
import { GymMembershipComponent } from './gym-membership/gym-membership.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ImageCropperComponent } from './avatar/image-cropper/image-cropper.component';
import { ProfileComponent } from './profile/profile.component';
import { TimerComponent } from './timer/timer.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonalTrainerComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MenuCentralComponent,
    GymMembershipComponent,
    AvatarComponent,
    ImageCropperComponent,
    ProfileComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
