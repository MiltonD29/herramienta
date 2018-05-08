import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the HeroePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heroe',
  templateUrl: 'heroe.html',
})
export class HeroePage {

  // tabBarElement: any;
  // splash = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    // this.tabBarElement.style.display = 'none';
    // setTimeout(() => {
    //   this.splash = false;
    //   this.tabBarElement.style.display = 'flex';
    // }, 4000);
  }

  navHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
