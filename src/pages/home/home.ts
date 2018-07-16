import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FcmProvider } from '../../providers/fcm/fcm';
import {ToastController} from 'ionic-angular';
import {tap} from 'rxjs/operators'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController,public fcm:FcmProvider,public toastCtrl:ToastController) { }
  
  ionViewDidLoad()
  {
    this.fcm.getToken()
    this.fcm.listenToNotifications().pipe(
      tap(msg=>{
        const toast =this.toastCtrl.create({
          message:msg.body,
          duration:3000

        });
        toast.present();
      })
    ).subscribe();
  }


}
