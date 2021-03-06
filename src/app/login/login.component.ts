import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {Jsonp} from '@angular/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user: Observable<firebase.User>;
    items: FirebaseListObservable<any[]>;
  //   msgVal: string = '';
  //   emailID : string = '';
  //   password : string = '';

  // constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    
  //   this.items = af.list('/messages', {
  //     query: {
  //       limitToLast: 50
  //     }
  //   });

  //   this.user = this.afAuth.authState;
    
    
  // }
  
  // loginUserNameAndPassword() {
  //   console.log(this.emailID+ " : " + this.password);
  //   this.afAuth.auth.signInWithEmailAndPassword(this.emailID,this.password).catch(err => {
  //     console.log(err.message);
  //     console.log(err.name);
  //   });
  // }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  //     login() {
  //       this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        
  //     }

  //     logout() {
  //       this.afAuth.auth.signOut();
  //     }

  //     Send(desc: string) {
  //       this.items.push({ message: desc});
  //       this.msgVal = '';
  //     }


  ngOnInit() {
  }

  email: string;
  password: string;

  constructor(public authService: AuthService,public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;
    
    
  }
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }

}
