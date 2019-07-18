import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular'

import { ModalController } from 'ionic-angular';



/**
 * Generated class for the MainmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainmenuPage {
  constructor( 
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController) {
  }

  presentModal() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainmenuPage');
  }

  menuToggle(){
    this.menuCtrl.toggle()
  }

  Contac(){
   this.Contac()
  }
}