import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'bai10-b2dee',
        appId: '1:774411714833:web:52edae7b7cbd94c0648cb0',
        storageBucket: 'bai10-b2dee.appspot.com',
        apiKey: 'AIzaSyD6j65kZV8Jo0L_eP9moIXR7oJmIRB-pEo',
        authDomain: 'bai10-b2dee.firebaseapp.com',
        messagingSenderId: '774411714833',
      }),
    ),
    provideAuth(() => getAuth()),
  ],
};
