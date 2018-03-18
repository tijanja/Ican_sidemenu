import { Component } from '@angular/core';
import { LoginService } from "./login.service";
import {NavController, LoadingController, ToastController } from "ionic-angular/index";
import {AuthService} from "../../providers/auth-service/auth-service";
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'login.html'
})
export class LoginComponent {

  loading: any;
  loginData = { controller:'ican',action:'login',username:'', password:'' };
  data: any;

  constructor(private loginService: LoginService, public navCtrl: NavController,public authService: AuthService,public loadingCtrl: LoadingController,public toastCtrl:ToastController,public alertCtrl: AlertController) {}

  loginMember(username) {
    this.loginService.login(username);
    this.navCtrl.pop();
  }

  doLogin() {
    // if(this.loginData.username.trim().length!=0 && this.loginData.password.trim().length!=0)
    // {
    //   this.showLoader();

    //   this.authService.login(this.loginData).then((result) =>
    //     {
    //       console.log(result);
    //       this.loading.dismiss();
    //       this.data = result;


    //       if(this.data.action)
    //       {
    //         localStorage.setItem('fname', this.data.data.fname);
    //         localStorage.setItem('lname', this.data.data.lname);
    //         localStorage.setItem('email', this.data.data.email);
    //         localStorage.setItem('memberId', this.data.data.memberId);
    //         localStorage.setItem('registrationNum', this.data.data.registrationNum);
    //         localStorage.setItem('phone', this.data.data.phone);

    //         this.navCtrl.pop();
    //       }
    //       else
    //       {
    //         this.presentAlert("Invalid login details", "Please check and try again");
    //       }


    //       //this.navCtrl.setRoot(TabsPage);
    //     },
    //     (err) => {
    //       this.loading.dismiss();
    //       this.presentAlert("Connection Error","Please try again later");

    //     });
    // }
    // else
    // {
    //   this.presentAlert("Login Error", "Invalid login details");
    // }

    this.navCtrl.pop();
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
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

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();

  }

  presentAlert(title: string, message: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
