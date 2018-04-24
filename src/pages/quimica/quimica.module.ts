import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuimicaPage } from './quimica';

@NgModule({
  declarations: [
    QuimicaPage,
  ],
  imports: [
    IonicPageModule.forChild(QuimicaPage),
  ],
})
export class QuimicaPageModule {}
