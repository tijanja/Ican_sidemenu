import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {DocumentViewer, DocumentViewerOptions} from "@ionic-native/document-viewer";

/**
 * Generated class for the PlenaryViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plenary-view',
  templateUrl: 'plenary-view.html',
})
export class PlenaryViewPage {

  plenary: string;
  title: string;
  synopsis: string;
  options: DocumentViewerOptions =  {
    title: this.title
  };


  constructor(public navCtrl: NavController, public navParams: NavParams,private docViewer:DocumentViewer,public toastCtrl:ToastController)
  {
    this.plenary = this.navParams.get("plenary");
    this.title = this.navParams.get("title");
    this.synopsis = this.navParams.get("synopsis");

  }

  ionViewDidLoad()
  {
    this.docViewer.canViewDocument('assets/aa.pdf', 'application/pdf',this.options,()=>{ this.presentToast("it can show");},(id,installer)=>
    {
      if(confirm("Do you want to install the free PDF Viewer App "+ id + " for Android?"))
      {
        installer();
      }
    },()=>{},(error)=>
    {
      this.presentToast(error.toString());
    });
  }

  readDoc()
  {
    this.docViewer.viewDocument('assets/aa.pdf', 'application/pdf', this.options,()=>{},()=>{},(diviceId,installer)=>{installer()},(error)=>{ this.presentToast(error.toString());});
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();

  }

}
