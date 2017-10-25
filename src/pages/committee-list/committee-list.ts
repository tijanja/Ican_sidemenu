import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommitteeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-committee-list',
  templateUrl: 'committee-list.html',
})
export class CommitteeListPage {

  committeeArray: Array<{name: string,position:string,count:number}>;
  count:number =0;
  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.committeeArray = [
      {name:"Haruna  N. Yahaya",position:"Council Member Chairman",count:1},
      {name:"Queensley S. Seghosime",position:"Council Member Deputy Chairman",count:2},
      {name:"Chibuzor N. Anyanechi",position:"Council Member",count:3},
      {name:"Oluwatobi A. Abiola",position:"Council Member",count:4},
      {name:"Jude Sunny Egbo",position:"Council Member Deputy Conference Director",count:5},
      {name:"Felicia Aina Bamgbose",position:"Council Member",count:6},
      {name:"Adeyemi Adetunji",position:"Conference Director",count:7},
      {name:"Abiodun Akinwobi",position:"Member",count:8},
      {name:"Martina Nnena Amadi",position:"Member",count:9},
      {name:"Temitope Babajide",position:"Member",count:10},
      {name:"Bucky Agarry",position:"Member",count:11},
      {name:"Manan Cowan",position:"Member",count:12},
      {name:"Najib I. Galadanci",position:"Member",count:13},
      {name:"Eze Ibiam",position:"Member",count:14},
      {name:"Biodun Alagbe",position:"Member",count:15},
      {name:"Helen Irobuisi",position:"Member",count:16},
      {name:"Patience Katchy",position:"Member",count:17},
      {name:"Jerry Nwanne",position:"Member",count:18},
      {name:"Ijeoma Okikechi",position:"Member",count:19},
      {name:"Phillip Okonkwo",position:"Member",count:20},
      {name:"Francis Chavwuko Okoro",position:"Member",count:21},
      {name:"Gbenga Omidiji",position:"Member",count:22},
      {name:"Felicia Omubo-Dede",position:"Member",count:23},
      {name:"Ogechukwu Patience",position:"Member",count:24},
      {name:"Tom Onyeagwa",position:"Member",count:25},
      {name:"Josephine N. Onyia",position:"Member",count:26},
      {name:"Sam-Oburu Ijeoma",position:"Member",count:27},
      {name:"Mohammad Soja",position:"Member",count:28},
      {name:"Akeem A. Suleiman",position:"Member",count:29},
      {name:"Ahmed R. Sulaiman",position:"Member",count:30},
      {name:"Hauwa Umar Sule",position:"Member",count:31},
      {name:"Ijeoma Ugwunebo",position:"Member",count:32},
      {name:"Esther Umahi",position:"Member",count:33},
      {name:"Adeyemi Adesanya",position:"Member",count:34},
      {name:"Deji Awobona",position:"Member",count:35},
      {name:"Robert Itawa",position:"Member",count:36},
      {name:"Usman Mohammad",position:"Member",count:37},
      {name:"Biodun Alagbe",position:"Member",count:38},
      {name:"Ijeoma Nnachi",position:"Member",count:39},
      {name:"Innocent Anyahuru",position:"FCA Member",count:40}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommitteeListPage');
  }

}
