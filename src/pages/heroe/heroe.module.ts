import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroePage } from './heroe';

@NgModule({
  declarations: [
    HeroePage,
  ],
  imports: [
    IonicPageModule.forChild(HeroePage),
  ],
})
export class HeroePageModule {}
