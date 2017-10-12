import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {MenuComponent} from "../pages/menu/menu.component";
import {LoginService} from "./login/login.service";
import {LoginComponent} from "./login/login.component";


@Component({
  template: '<ion-nav #baseNav></ion-nav>',
  providers:[LoginService]
})
export class MyApp {
  @ViewChild('baseNav') nav: Nav;

  constructor(public platform:Platform,public loginservice:LoginService,public statusBar: StatusBar,public splashScreen: SplashScreen) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit()
  {
    const componentStack: Array<{page: Component}> = [{
      page: MenuComponent
    }];

    if (!this.loginservice.isLoggedIn) {
      componentStack.push({ page: LoginComponent });
    }

    this.nav.insertPages(0, componentStack, { animate: false });
  }

}
