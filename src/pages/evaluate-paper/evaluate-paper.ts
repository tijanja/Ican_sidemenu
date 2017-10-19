import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service/auth-service";


/**
 * Generated class for the EvaluatePaperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluate-paper',
  templateUrl: 'evaluate-paper.html',
})
export class EvaluatePaperPage {

  rating: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthService, public loadingCtrl: LoadingController, public toastCtrl: ToastController,public alertCtrl: AlertController) {
  }

  onModelChange(event,data)
  {
    this.rating = {controller:"ican",action:"rateing",ratingValue:event,paperTitle:data};
    this.ratePaper(this.rating);
      //console.log(event+" "+data);
  }

  ratePaper(rateData: any)
  {
    this.authService.sendRating(rateData).then((result)=>
    {
      console.log(result);
    },(err)=>
    {
      console.log(err);
    });
  }

}
