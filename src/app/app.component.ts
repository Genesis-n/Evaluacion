import { Component } from '@angular/core';
import { Platform, MenuController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

//import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public app : App, public menu : MenuController, ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  backToWelcome() {
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  logout() {
    //Api Token Logout
    localStorage.clear();
    this.menu.enable(false);
    setTimeout(() => this.backToWelcome(), 1000);
  }
 
  sais(){
//Api Token sais
localStorage.clear();
this.menu.enable(false);
setTimeout(() => this.backToWelcome(), 1000);
  }
}

getUsers() {
  this.restProvider.getUsers()
  .then(data => {
    this.users = data;
    console.log(this.users);
  });
}

