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
    if(this.loginData.username.trim().length!=0 && this.loginData.password.trim().length!=0)
    {
      this.showLoader();
      this.authService.login(this.loginData).then((result) =>
        {
          this.loading.dismiss();
          this.data = result;

          //console.log(result);
          localStorage.setItem('fname', this.data.fname);
          localStorage.setItem('lname', this.data.lname);
          localStorage.setItem('email', this.data.email);
          localStorage.setItem('memberId', this.data.memberId);
          localStorage.setItem('registrationNum', this.data.registrationNum);
          localStorage.setItem('phone', this.data.phone);
          this.navCtrl.pop();

          //this.navCtrl.setRoot(TabsPage);
        },
        (err) => {
          this.loading.dismiss();
          this.presentAlert("Connection Error","Please try again later");

        });
    }
    else
    {
      this.presentAlert("Login Error", "Invalid login details");
    }
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
