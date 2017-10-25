import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PastPresidentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-past-president',
  templateUrl: 'past-president.html',
})
export class PastPresidentPage {

  presidents_asso: Array<{name: string, a:string, duration:string}>;
  presidents_chart:  Array<{name: string, a:string, duration:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.presidents_asso=[
      {name:"Akintola Williams", a: "CBE,CFR,B.Com,FCA", duration:"1960 - 1961"},
      {name:"Akintola WILLIAMS", a: "",duration:"1961 - 1962"},
      {name:"Frank Cuthbert Oladipo COKER", a: "CFR, B.Com., FCA, (Deceased)",duration:"1962 - 1963"},
      {name:"Frank Cuthbert Oladipo COKER", a: "CFR, B.Com., FCA, (Deceased)",duration:"1963 - 1964"},
      {name:"Frank Cuthbert Oladipo COKER", a: "CFR, B.Com., FCA, (Deceased)",duration:"1964 - 1965"},
      ];

    this.presidents_chart=[
      {name:"Cornelius Oladipupo Sunday OSENI, B.Sc., FCA (Deceased)", a: "", duration:"1991 - 1992 "},
      {name:"Oluwole Alani ADEOSUN, (Chief ) OON, BSc, FCA (Deceased)", a: "", duration:"1992 - 1993 "},
      {name:"Ismaila USMAN, (Mallam), FCA", a: "", duration:"1993 - 1994"},
      {name:"Olutoyin Olusola OLAKUNRI, (Chief, Mrs.), OFR, FCA", a: "", duration:"1994 - 1995 "},
      {name:"Simeon Olusola OGUNTIMEHIN, (Sir) OON, FCA", a: "", duration:"1995 - 1996"},
      {name:"Emmanuel Itoya IJEWERE, FCA", a: "", duration:"1996 - 1997 "},
      {name:"Agnes Adenike ADENIRAN, (Princess), FCA", a: "", duration:"1997 - 1998"},
      {name:"Ike NWOKOLO, (Sir), OFR, KSC, FCA", a: "", duration:"1998 - 1999 "},
      {name:"Adeboye Olugboyega BADEJO (Chief ), FCA", a: "", duration:"1999 - 2000 "},
      {name:"Herbert Adewole AGBEBIYI (Sir), KSC, FCA", a: "", duration:"2000 - 2001 "},
      {name:"Ugochukwu Stephen NWANKWO (Chief ), MON, FCA", a: "", duration:"2001 - 2002 "},
      {name:"Felix Kolawole BAJOMO (Senator) (Chief ), mni, FCA", a: "", duration:"2002 - 2003 "},
      {name:"Jaiye Kofolaran RANDLE, (Bashorun), OFR, CFR, FCA", a: "", duration:"2003 - 2004 "},
      {name:"Ibironke Mojisola OSIYEMI (Mrs.), FCA", a: "", duration:"2004 - 2005 "},
      {name:"Abdul Lateef Adebayo OWOYEMI (Alhaji, Otunba), FCA", a: "", duration:"2005 - 2006 "},
      {name:"Catherine Ginikanwa OKPAREKE, (Chief, Dr., Mrs.), mni, MBA, MNIM, FCA", a: "", duration:"2006 - 2007 "},
      {name:"Adebajo Abiodun BABINGTON-ASHAYE, (Prince), FCA (Deceased)", a: "", duration:"2007 - 2008 "},
      {name:"Richard Uchechukwu UCHE, (Chief ), PhD, FCA", a: "", duration:"2008 - 2009 "},
      {name:"Elizabeth Omeresan ADEGITE, (Chief, Mrs.), BSc. MBA, FCA", a: "", duration:"2009 - 2010 "},
      {name:"Sebastian Achulike OWUAMA (Major-Gen., rtd.), BSc, FCA", a: "", duration:"2010 - 2011 "},
      {name:"Francis OJAIDE (Professor) OON, MSc., PhD, FCA", a: "", duration:"2011 - 2012 "},
      {name:"Adedoyin Idowu OWOLABI BSc, MILR, MNIM, FCA", a: "", duration:"2012 - 2013 "},
      {name:"Kabir Alkali MOHAMMED (Alhaji) mni, MFR, FCIS, CGMA, FCA", a: "", duration:"2013 - 2014 "},
      {name:"Chidi Onyeukwu AJAEGBU", a: "MBF, FCS, FCA", duration:"2014 - 2015 "},
      {name:"Samuel Olufemi DERU (Otunba) ", a: "JP, FNIM, FCA", duration:"2015 - 2016 "},
      {name:"Deacon Titus A. SOETAN,", a: "FCA (IPP)", duration:"2016 – 2017 "}
      ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastPresidentPage');
  }

}
