import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpModule} from '@angular/http'
import {JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MaterialModule } from '@angular/material';
import { MasonryModule } from 'angular2-masonry';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ImageListComponent } from './image-list/image-list.component';


import { Provider } from '@angular/core';

import { BrowserXhr } from '@angular/http';
import {CustExtBrowserXhr} from '../app/cors/cust-ext-browser-xhr';

import {ImageServiceService} from './shard/image-service.service'
import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { ReactiveFormsModule } from '@angular/forms';

export const firebaseConfig = {
  // apiKey: 'AIzaSyC4u1X5L3B5nHzJ-BVzxmHHVxu_JHa5cns',
  // authDomain: 'https://fir-app-6ac9e.firebaseapp.com',
  // databaseURL: 'https://fir-app-6ac9e.firebaseapp.com',
  // projectId: '749312866914',
  // storageBucket: 'fir-app-6ac9e.appspot.com',
  // messagingSenderId: '749312866914'
    apiKey: "AIzaSyC4u1X5L3B5nHzJ-BVzxmHHVxu_JHa5cns",
    authDomain: "fir-app-6ac9e.firebaseapp.com",
    databaseURL: "https://fir-app-6ac9e.firebaseio.com",
    projectId: "fir-app-6ac9e",
    storageBucket: "fir-app-6ac9e.appspot.com",
    messagingSenderId: "749312866914"
};



@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    JsonpModule,
    MasonryModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [ImageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
