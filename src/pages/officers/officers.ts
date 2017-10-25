import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OfficersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-officers',
  templateUrl: 'officers.html',
})
export class OfficersPage {

  officers: Array<{name:string,a:string,position:string,image:string}>;
  members: Array<{name:string,d:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.officers = [
      {name:"Isma’ila Muhammadu Zakari",a:"MNI, FBR, FCA",position:"President",image:"assets/president.png"},
      {name:"Alhaji Razak Jaiyeola",a:"BSc, ACFE, CRISC, FCA",position:"Vice President",image:"assets/officers/vp.png"},
      {name:"Mazi Nnamdi A. Okwuadigbo",a:"JP, BSc., FCA",position:"1st Deputy Vice President",image:"assets/officers/1dvp.png"},
      {name:"Mrs. Onome Joy Adewuyi",a:"BSc, MSc, ACPIN, FCIB, FCA",position:"2nd Deputy Vice President",image:"assets/officers/2dvp.png"},
      {name:"Deacon Titus A. Soetan",a:"FCA",position:"IMMEDIATE PAST PRESIDENT",image:"assets/officers/decone.png"},
      {name:"Mr. John Irabor EVBODAGHE",a:"MBA, FCA", position:"Registrar/Chief Executive",image:"assets/officers/registra.png"},
      {name:"Chief Oyemolu Olugbenga Akinsulire",a:"MSc, MBA, FNIM, FCA", position:"HONORARY TREASURER",image:"assets/officers/user.png"}
    ]

    this.members = [

      {name:"Mr. Oluwatobi Ayodele Abiola",d:"HND, BSc, FCA"},
      {name:"Deacon Solomon Oluwole Adeleke",d:"FCA"},
      {name:"Mrs. Titilola Ariyike Nurat Akibayo",d:"MBA, FCCA, FCIT, FCA"},
      {name:"Chief Davidson Chizuoke Stephen Alaribe",d:"MA, CFA, MIMC, MNIM, FCA"},
      {name:"Mr. Chibuzor Noel Anyanechi",d:"BSc, MBA, FCA"},
      {name:"Dr. Adedeji Abiodun Awobotu",d:"CAMS, CFE, M.IoD, FCA"},
      {name:"Mrs. Felicia Aina Bamgbose",d:"MBA, FCA"},
      {name:"HRM. Adaku Chilaka Chidume-Okoro",d:"BSc, MSc, FCA"},
      {name:"Rev. Samson Adewale Disu",d:"BSc, MSc, CFA, FCTI, FCA"},
      {name:"Mr. Jude Sunday Egbo",d:"HND, MBA, FCA"},
      {name:"Mr. Omehe Gaddaffi Peter Ekhoragbon",d:"HND, FCA"},
      {name:"Mrs. Comfort Olujumoke Eyitayo",d:"mni, CFA, FCA"},
      {name:"Mallam Tijjani Musa Isa",d:"BSc, M.IoD, FCA"},
      {name:"Dr. Ahmed Modu Kumshe",d:"BSc, MSc, MBA, PhD, ACTI, FCA"},
      {name:"Hon. Nasiru Muhammad",d:"BSc, MSc, FCIT, FCA"},
      {name:"Navy Captain Godwin Obaje",d:"MBA, FCA"},
      {name:"Mr. Olutola Ogundipe",d:"B.ENG, FCA"},
      {name:"Lady Ngozi Monica Okonkwo",d:"MSc, ACIB, CFA, CFE, FCA"},
      {name:"Mr. Innocent Okwuosa",d:"SAP, FICO, MSc, ACIB, FCA"},
      {name:"Mr. Tajudeen Adewale Olayinka",d:"BSc, MBF, FCA"},
      {name:"Dr. Etofolam Felix Osuji",d:"mni, MSc, FCIT, FCA"},
      {name:"Mrs. Hilda Ofure Ozoh",d:"MBA, ACIT, FCA"},
      {name:"Hajia Queensley Sofuratu Seghosime",d:"mni, MBA, FCIT, FCA"},
      {name:"Mallam Haruna Nma Yahaya",d:"BSc, MBA, ANIM, FCA"}

    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficersPage');
  }

}
