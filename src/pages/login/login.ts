import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { MainmenuPage } from '../mainmenu/mainmenu';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  contactPage = ContactPage;
  aboutPage = AboutPage;
  mainmenuPage = MainmenuPage;

  constructor(private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public Ttoast: ToastController) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data.email)
      this.toast.create({
        message: `Welcome To Empresa, ${data.email}`,
        duration: 1000
      }).present();
      });
  }

  presentToast() {
    const toast = this.Ttoast.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }

 // golistasuper() {
  //  this.navCtrl.push(ListasuperPage)
 // }

}
