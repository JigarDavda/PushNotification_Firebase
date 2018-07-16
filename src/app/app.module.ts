import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FcmProvider } from '../providers/fcm/fcm';
import { AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';
import {Firebase} from '@ionic-native/firebase';


const firebase ={
  apiKey:'AIzaSyDj_52yBsoSD3NgWlRLL4yJQQ0UIIUutTQ',
  authDomain:"push-notification-a9f7b.firebaseapp.com",
  databaseURL:"https://push-notification-a9f7b.firebaseio.com",
  projectId:"push-notification-a9f7b",
  storageBucket: "push-notification-a9f7b.appspot.com",
  messagingSenderId:'112194018171'

}
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Firebase,
    FcmProvider
  ]
})
export class AppModule {}
