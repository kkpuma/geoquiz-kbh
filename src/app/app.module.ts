import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SummeryComponent } from './summery/summery.component';
import { LandingComponent } from './landing/landing.component';
import { LoadingComponent } from './loading/loading.component';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

@NgModule({
  declarations: [AppComponent, MapComponent, SummeryComponent, LandingComponent, LoadingComponent, ScoreboardComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, MatButtonModule, MatIconModule, MatSnackBarModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
