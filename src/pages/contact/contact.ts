import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CallNumber } from '@ionic-native/call-number';


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private socialSharing: SocialSharing,
    public callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }


  shareSheetShare() {
    this.socialSharing.share("Share message", "Share subject", "URL to file or image", "A URL to share").then(() => {
      console.log("shareSheetShare: Success");
    }).catch(() => {
      console.error("shareSheetShare: failed");
    });
  }

// //fab
// smsShare() {
//   this.socialSharing.shareViaSMS("shareViaSMS", "mobile-no").then(() => {
//     console.log("shareViaSMS: Success");
//   }).catch(() => {
//     console.error("shareViaSMS: failed");
//   });
// }
// whatsappShare() {
//   this.socialSharing.shareViaWhatsApp("shareViaWhatsApp", teimage, teUrl).then(() => {
//     console.log("shareViaWhatsApp: Success");
//   }).catch(() => {
//     console.error("shareViaWhatsApp: failed");
//   });
// }
// facebookShare() {
//   this.socialSharing.shareViaFacebook("shareViaFacebook", teimage, teUrl).then(() => {
//     console.log("shareViaFacebook: Success");
//   }).catch(() => {
//     console.error("shareViaFacebook: failed");
//   });
// }

//callnumber
phone(){
  this.callNumber.callNumber("18292741064", true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
}

}
