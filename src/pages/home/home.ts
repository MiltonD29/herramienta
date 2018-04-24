import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

import { EspanolPage } from '../../pages/espanol/espanol'
import { FisicaPage } from '../../pages/fisica/fisica'
import { GeografiaPage } from "../../pages/geografia/geografia";
import { HistoriaPage } from "../../pages/historia/historia";
import { MatePage } from "../../pages/mate/mate";
import { QuimicaPage } from "../../pages/quimica/quimica";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public dataService: DataProvider) {

    }

    navEspanol(){
      this.navCtrl.setRoot(EspanolPage)
    }

    navFisica(){
      this.navCtrl.setRoot(FisicaPage);
    }

    navMate(){
      this.navCtrl.setRoot(MatePage);
    }

    navQuimica(){
      this.navCtrl.setRoot(QuimicaPage);
    }

    navHistoria(){
      this.navCtrl.setRoot(HistoriaPage);
    }

    navGeo(){
      this.navCtrl.setRoot(GeografiaPage);
    }

}
