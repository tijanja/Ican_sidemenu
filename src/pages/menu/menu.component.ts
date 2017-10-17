import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {ConferencePapersPage} from "../conference-papers/conference-papers";
import {HomePage} from "../home/home";
import {SponsorsPage} from "../sponsors/sponsors";
import {ConferenceTvPage} from "../conference-tv/conference-tv";
import {QuizPage} from "../quiz/quiz";
import {AttendancePage} from "../attendance/attendance";
import {ListPage} from "../list/list";
import {EvaluatePaperPage} from "../evaluate-paper/evaluate-paper";
import {EvaluateEventPage} from "../evaluate-event/evaluate-event";
import {CommitteeListPage} from "../committee-list/committee-list";
import {PastPresidentPage} from "../past-president/past-president";
import {OfficersPage} from "../officers/officers";

@Component({
  templateUrl: 'menu.html'
})
export class MenuComponent {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  fname: string;
  lname: string;
  memberId: string;
  registrationNum: string;
  email: string;
  phone: string;


  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    // used for an example of ngFor and navigation
    this.fname = localStorage.getItem("fname");
    this.lname = localStorage.getItem("lname");
    this.memberId = localStorage.getItem("memberId");
    this.registrationNum = localStorage.getItem("registrationNum");
    this.email = localStorage.getItem("email");
    this.phone = localStorage.getItem("phone");

    this.pages = [
      { title: 'Welcome', component: HomePage,icon:'film' },
      { title: 'Conference Papers', component: ConferencePapersPage ,icon:'paper'},
      { title: 'Evaluate Papers', component:  EvaluatePaperPage,icon:'star'},
      { title: 'Conference Tv', component: ConferenceTvPage,icon:'desktop'},
      { title: 'Conference Quiz', component:  QuizPage,icon:'school'},
      { title: 'Sponsors', component: SponsorsPage,icon:'people'},
      { title: 'Officers & Council Members', component:  OfficersPage,icon:'star'},
      { title: 'Past Presidents', component:  PastPresidentPage,icon:'pin'},
      { title: 'Conference Committee', component:  CommitteeListPage,icon:'pin'}
    ];

  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  // }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
