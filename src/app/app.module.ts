import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CallNumber } from '@ionic-native/call-number';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';


export const firebaseConfig = {
  apiKey: "AIzaSyCej1z4fmDrmOGtT18EdTmBA5Ddkn00_6k",
  authDomain: "fir-auth-d9a92.firebaseapp.com",
  databaseURL:"https://fir-auth-d9a92.firebaseio.com",
  projectId: "fir-auth-d9a92",
  storageBucket: "fir-auth-d9a92.appspot.com",
  messagingSenderId: "334898017030",
  appId: "1:334898017030:web:99c1090c2a38dcda"
};

const firebaseAuth = {
  apiKey: "AIzaSyCej1z4fmDrmOGtT18EdTmBA5Ddkn00_6k",
  authDomain: "fir-auth-d9a92.firebaseapp.com",
  databaseURL: "https://fir-auth-d9a92.firebaseio.com",
  projectId: "fir-auth-d9a92",
  storageBucket: "fir-auth-d9a92.appspot.com",
  messagingSenderId: "334898017030"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HttpClientModule
    
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

