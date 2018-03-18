import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {DocumentViewer, DocumentViewerOptions} from "@ionic-native/document-viewer";
import {PictureBlogPage} from "../picture-blog/picture-blog";
import {DomSanitizer} from "@angular/platform-browser";



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
  pdfLink:any;
  options: DocumentViewerOptions =  {
    title: this.title
  };


  constructor(public navCtrl: NavController, public navParams: NavParams,private docViewer:DocumentViewer,public toastCtrl:ToastController,private sanitizer: DomSanitizer)
  {
    this.plenary = this.navParams.get("plenary");
    this.title = this.navParams.get("title");
    this.synopsis = this.navParams.get("synopsis");

  }

  goToPDFView()
  {
    this.navCtrl.push(PictureBlogPage);
  }

  ionViewDidLoad()
  {
    this.docViewer.canViewDocument('assets/aa.pdf', 'application/pdf',this.options,()=>{ this.presentToast("it can show");},(id,installer)=>
    {
      if(confirm("Do you want to install the free PDF Viewer App "+ id + " for Android?"))
      {
        installer();
      }
    },()=>
    {
      this.presentToast("this is impossible");
    },(error)=>
    {
      this.presentToast(error.toString());
    });
  }

  readDoc()
  {
    //this.docViewer.viewDocument('assets/aa.pdf', 'application/pdf', this.options,()=>{},()=>{},(diviceId,installer)=>{installer()},(error)=>{ this.presentToast(error.toString());});

    this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl("http://www.tutorialspoint.com/java/java_tutorial.pdf");
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
