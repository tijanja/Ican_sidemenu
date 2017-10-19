import { Component } from '@angular/core';
import {
  AlertController, IonicPage, LoadingController, NavController, NavParams, Platform,
  ToastController
} from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import {Geofence} from "@ionic-native/geofence";
import {Geolocation} from "@ionic-native/geolocation";
import {AuthService} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {

  map: GoogleMap;
  mapElement: HTMLElement;

  title: string = 'ICAN 47th Annual Conference Attendance';
  lat: number;
  lng: number;

  memberId: string;

  latVenue: number = 6.581773;
  lngVenue: number = 3.280167;

  attendanceData: any;
  loading: any;
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private googleMaps: GoogleMaps,public geofence: Geofence,private geolocation: Geolocation,private platform: Platform,public authService: AuthService, public loadingCtrl: LoadingController, public toastCtrl: ToastController,public alertCtrl: AlertController)
  {
    this.memberId = localStorage.getItem("memberId");
    //this.geofence.initialize().then(()=>this.addGeoFence(),(err)=>console.log(err));
    this.getUserLocation(geolocation,platform);
  }

  markAttendance()
  {
    this.showLoader();
    this.attendanceData = {controller:"ican",action:"markAttendance",memberId:this.memberId}
    this.authService.markAttendance(this.attendanceData).then((result)=>
    {
      this.loading.dismiss();
      this.data = result;
      if(this.data.action)
      {
        this.presentAlert("Done!",this.data.message);
      }
      else
      {
        this.presentAlert("Error!",this.data.message);
      }

    },(err)=>
    {
      this.loading.dismiss();
      this.presentAlert("Network Error!","Please try again later.");
    });
  }

  ionViewDidLoad() {
   this.loadMap(); //6.5918133,3.3081222
  }

  loadMap() {
    this.mapElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 6.5918133,
          lng: 3.3081222
        },
        zoom: 16,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
          title: '47th Annual Conference Venue\n [Click here mark attendance]',
          icon: 'orange',
          animation: 'DROP',
          position: {
            lat: 6.5918133,
            lng: 3.3081222
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                //alert('clicked');
              });
          });

      });
  }

  getUserLocation( geolocation: Geolocation,platform: Platform)
  {
    platform.ready().then(()=>{
      geolocation.getCurrentPosition().then(pos=>{
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        this.lat =  pos.coords.latitude;
        this.lng = pos.coords.longitude;
      });

      const watch = geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        this.lat =  pos.coords.latitude;
        this.lng = pos.coords.longitude;
      });

      watch.unsubscribe();
    });
  }

  private addGeoFence()
  {
    let fence={
      id:'011680-akinde-ican-47-project',
      latitude: 6.5918133,
      longitude:3.3081222,
      radius:100,
      transitionType:1,
      notification: { //notification settings
        id:             1, //any unique ID
        title:          'ICAN 47th Annual Conference', //notification title
        text:           'Your attendance has just been registered', //notification body
        openAppOnClick: true //open app when notification is tapped
      }
    };

    this.geofence.addOrUpdate(fence).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
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
