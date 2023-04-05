import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';

import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from './features/login/login.module';
import { HomeModule } from './features/home/home.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { StressedModule } from './features/stressed/stressed.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginModule,
    HomeModule,
    SharedModule,
    StressedModule,
    CoreModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
