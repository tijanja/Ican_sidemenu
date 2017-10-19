import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {YoutubeVideoPlayer} from "@ionic-native/youtube-video-player";
import {AuthService} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the ConferenceTvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conference-tv',
  templateUrl: 'conference-tv.html',
})
export class ConferenceTvPage {

  loading: any;
  videos: any;
  // videos: any[] =[
  //   {name:"Investiture of the 53rd ICAN President - Live stream. 30/05/2017",links:"https://www.youtube.com/embed/kxiMBQOCHCU"},
  //   {name:"45th Annual Accountants' Conference and 5oth Anniversary celebration",links:"https://www.youtube.com/embed/M97WnoNmunw"},
  //   {name:"2015 Annual Dinner & Awards",links:"https://www.youtube.com/embed/tos89-FQED0"}
  //   ,
  // ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public youtube:YoutubeVideoPlayer,private authService:AuthService, public loadingCtrl: LoadingController, public toastCtrl: ToastController,public alertCtrl: AlertController)
  {

  }

  ionViewDidLoad()
  {
    this.getVideoList();
  }

 playVideo__()
 {
   //alert("tunji");
   this.youtube.openVideo('wBakyoAR8XM');
 }

 getVideoList()
 {
   this.showLoader();
   let m = {controller:"ican",action:"getVideoList"};
   this.authService.sendRating(m).then((result)=>
   {
     this.loading.dismiss();
     let a:any = result;
     this.videos = a.data;

   },(err)=>
   {
     this.loading.dismiss();
     console.log(err);
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
