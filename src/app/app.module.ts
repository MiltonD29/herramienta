import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EspanolPage } from '../pages/espanol/espanol';
import { FisicaPage } from "../pages/fisica/fisica";
import { GeografiaPage } from "../pages/geografia/geografia";
import { HistoriaPage } from "../pages/historia/historia";
import { MatePage } from "../pages/mate/mate";
import { QuimicaPage } from "../pages/quimica/quimica";
import { HeroePage } from '../pages/heroe/heroe';

// components
import { FlashCardComponent } from '../components/flash-card/flash-card';

// providers
import { DataProvider } from '../providers/data/data';

import { HttpModule } from '@angular/http'
import { DataespProvider } from '../providers/dataesp/dataesp';
import { DatafisProvider } from '../providers/datafis/datafis';
import { DatageoProvider } from '../providers/datageo/datageo';
import { DatahisProvider } from '../providers/datahis/datahis';
import { DatamatProvider } from '../providers/datamat/datamat';
import { DataquiProvider } from '../providers/dataqui/dataqui';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FlashCardComponent,
    EspanolPage,
    FisicaPage,
    GeografiaPage,
    HistoriaPage,
    MatePage,
    QuimicaPage,
    HeroePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EspanolPage,
    FisicaPage,
    GeografiaPage,
    HistoriaPage,
    MatePage,
    QuimicaPage,
    HeroePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    DataespProvider,
    DatafisProvider,
    DatageoProvider,
    DatahisProvider,
    DatamatProvider,
    DataquiProvider
  ]
})
export class AppModule {}
