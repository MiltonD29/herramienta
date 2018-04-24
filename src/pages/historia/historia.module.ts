import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoriaPage } from './historia';

@NgModule({
  declarations: [
    HistoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoriaPage),
  ],
})
export class HistoriaPageModule {}
