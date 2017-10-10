import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {YoutubeVideoPlayer} from "@ionic-native/youtube-video-player";

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

  videos: any[] =[
    {name:"Investiture of the 53rd ICAN President - Live stream. 30/05/2017",links:"https://www.youtube.com/embed/kxiMBQOCHCU"},
    {name:"45th Annual Accountants' Conference and 5oth Anniversary celebration",links:"https://www.youtube.com/embed/M97WnoNmunw"},
    {name:"2015 Annual Dinner & Awards",links:"https://www.youtube.com/embed/tos89-FQED0"}
    ,
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public youtube:YoutubeVideoPlayer) {
  }

 playVideo__()
 {
   //alert("tunji");
   this.youtube.openVideo('wBakyoAR8XM');
 }

}
