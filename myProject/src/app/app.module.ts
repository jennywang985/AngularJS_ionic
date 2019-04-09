import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IndexPage} from '../pages/index/index'
import {DetailPage} from '../pages/detail/detail'
import {CartPage} from '../pages/cart/cart'
import {OrderConfirmPage} from '../pages/order-confirm/order-confirm'
import {PayPage} from '../pages/pay/pay'
import {LoginPage} from '../pages/login/login'
import {UserCenterPage} from '../pages/user-center/user-center'
import {NotFoundPage} from '../pages/not-found/not-found'
import {MyHttpService} from './utility/service/myhttp.service'

@NgModule({
  declarations: [
    IndexPage,DetailPage,CartPage,PayPage,OrderConfirmPage,LoginPage,
    UserCenterPage,NotFoundPage,
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    IndexPage,DetailPage,CartPage,PayPage,OrderConfirmPage,LoginPage,
    UserCenterPage,NotFoundPage,
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    MyHttpService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
