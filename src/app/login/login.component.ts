import { Component } from '@angular/core';
import { LoginService } from "./login.service";
import {NavController, LoadingController, ToastController } from "ionic-angular/index";
import {AuthService} from "../../providers/auth-service/auth-service";

@Component({
  templateUrl: 'login.html'
})
export class LoginComponent {

  loading: any;
  loginData = { controller:'ican',action:'login',username:'', password:'' };
  data: any;

  constructor(private loginService: LoginService, public navCtrl: NavController,public authService: AuthService,public loadingCtrl: LoadingController,public toastCtrl:ToastController) {}

  loginMember(username) {
    this.loginService.login(username);
    this.navCtrl.pop();
  }

  doLogin() {
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
      this.presentToast(err);

    });
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
}
