import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
