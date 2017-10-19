import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FCM} from "@ionic-native/fcm";

declare let FCMPlugin;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public fcm: FCM)
  {

    if (typeof FCMPlugin != 'undefined') {

      FCMPlugin.getToken(function (token) {
        console.log(token);
      });
    }
  }

}
