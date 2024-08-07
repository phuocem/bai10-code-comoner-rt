import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser!: any;
  isLoggedIn: boolean = false;

  constructor(private auth: Auth) {}

  async login() {
    try {
      const credential = await signInWithPopup(
        this.auth,
        new GoogleAuthProvider(),
      );
      this.currentUser = credential.user;
      this.isLoggedIn = true;
      console.log(credential);
    } catch (error) {
      console.error('Error during sign in', error);
    }
  }

  async logout() {
    this.auth.signOut();
    this.currentUser = null;
    this.isLoggedIn = false;
  }
}
