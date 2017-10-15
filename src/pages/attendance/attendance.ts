import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
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

  latVenue: number = 6.581773;
  lngVenue: number = 3.280167;

  constructor(public navCtrl: NavController, public navParams: NavParams,private googleMaps: GoogleMaps,public geofence: Geofence,private geolocation: Geolocation,private platform: Platform)
  {
    this.geofence.initialize().then(()=>this.addGeoFence(),(err)=>console.log(err));
    //this.getUserLocation(geolocation,platform);
  }

  ionViewDidLoad() {
   // this.loadMap(); 6.5918133,3.3081222
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

  addGeoFence()
  {
    let fence={
      id:'011680-akinde-ican-adetunji-project',
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
}
