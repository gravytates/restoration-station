import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {
  loggedOut = true;
  logInForm = null;
  loggedIn = null;

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  goToForm(){
    this.loggedOut = null;
    this.logInForm = true;
  }

  ngOnInit() {
  }

  login(email, password) {
  this.afAuth.auth.signInWithEmailAndPassword(email, password);
  this.logInForm = null;
  this.loggedIn = true;
}

logout() {
  this.afAuth.auth.signOut();
  this.loggedIn = null;
  this.loggedOut = true;
}

}
