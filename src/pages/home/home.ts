import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {}  as User;

  constructor(public navCtrl: NavController,  
    public alertController: AlertController,
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    private afAuth: AngularFireAuth) {

  }


  
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Atención',
      subTitle: 'Su e-mail y Contraseña son incorretos, por favor intente Nuevamente.',
      buttons: ['OK']
    });
    alert.present();
  }

   login(user: User){
     this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    .then(data=>{
     console.log('loged in');
     this.navCtrl.push(LoginPage);//setRoot(LoginPage);
     //this.alertCtrl('WELCOME', 'You are loged in');
   })
    .catch(error=>{
     console.log('Error', error)
     this.showAlert();
     });
    }
}
