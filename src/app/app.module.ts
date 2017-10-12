import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import {YoutubeVideoPlayer} from "@ionic-native/youtube-video-player";
import {Geofence} from "@ionic-native/geofence";
import {Geolocation} from "@ionic-native/geolocation";
import {Ionic2Rating,Ionic2RatingModule} from "ionic2-rating";

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {MenuComponent} from "../pages/menu/menu.component";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MyApp} from "./app.component";

import {LoginModule} from "./login/login.module";
import {ConferenceTvPage} from "../pages/conference-tv/conference-tv";
import {ConferencePapersPage} from "../pages/conference-papers/conference-papers";
import {SponsorsPage} from "../pages/sponsors/sponsors";
import {QuizPage} from "../pages/quiz/quiz";
import {PictureBlogPage} from "../pages/picture-blog/picture-blog";
import {AuthService} from "../providers/auth-service/auth-service";
import {LoginComponent} from "./login/login.component";
import {YoutubePipe} from "../pipes/youtube/youtube";
import {AttendancePage} from "../pages/attendance/attendance";
import {EvaluatePaperPage} from "../pages/evaluate-paper/evaluate-paper";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import {EvaluateEventPage} from "../pages/evaluate-event/evaluate-event";
import {AttendancePageModule} from "../pages/attendance/attendance.module";
import {ConferencePapersPageModule} from "../pages/conference-papers/conference-papers.module";
import {ConferenceTvPageModule} from "../pages/conference-tv/conference-tv.module";
import {EvaluateEventPageModule} from "../pages/evaluate-event/evaluate-event.module";
import {EvaluatePaperPageModule} from "../pages/evaluate-paper/evaluate-paper.module";
import {PictureBlogPageModule} from "../pages/picture-blog/picture-blog.module";
import {QuizPageModule} from "../pages/quiz/quiz.module";
import {SponsorsPageModule} from "../pages/sponsors/sponsors.module";
import {PipesModule} from "../pipes/pipes.module";


//import {Geolocation} from "@ionic-native/geolocation";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    LoginModule,
    AttendancePageModule,
    ConferencePapersPageModule,
    ConferenceTvPageModule,
    EvaluateEventPageModule,
    EvaluatePaperPageModule,
    PictureBlogPageModule,
    QuizPageModule,
    SponsorsPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MenuComponent,
    ConferencePapersPage,
    ConferenceTvPage,
    QuizPage,
    PictureBlogPage,
    SponsorsPage,
    AttendancePage,
    EvaluatePaperPage,
    EvaluateEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geofence,
    Geolocation,
    GoogleMaps,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
