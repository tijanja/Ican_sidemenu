import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the ScoreBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score-board',
  templateUrl: 'score-board.html',
})
export class ScoreBoardPage {

  loading: any;
  scoreList: any;
  score:any;
  scoreArray:Array<{fname:string,lname:string,score:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private authService:AuthService, public loadingCtrl: LoadingController, public toastCtrl: ToastController,public alertCtrl: AlertController)
  {

  }

  ionViewDidLoad()
  {
    this.getScoreListings()
  }

  getScoreListings()
  {
    this.showLoader();
    let m = {controller:"ican",action:"getScoreListing"};
    this.authService.shareQuizScore(m).then((result)=>
    {
      this.loading.dismiss();

      this.score = result;
      this.scoreList = this.score.data;
      // for(let i=0;i<this.scoreList.length;i++)
      // {
      //   let name = {fname:this.scoreList.fname,lname:this.scoreList.lname,score:this.scoreList.score};
      //   this.scoreArray.push(name);
      // }

      console.log(this.scoreList);
    },(err)=>
    {
      this.loading.dismiss();
    });
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });
  }
}
