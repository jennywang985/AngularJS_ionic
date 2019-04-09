import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// 第一个index，第二个cart ，第三个user-center，第四个not-found
import {IndexPage} from '../index/index'
import {CartPage} from '../cart/cart'
import {UserCenterPage} from '../user-center/user-center'
import {NotFoundPage} from '../not-found/not-found'

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  // 定义变量，来保存tab被选中时要加载的页面类
  tabIndex = IndexPage
  tabCart = CartPage
  tabUS = UserCenterPage
  tabNotFound = NotFoundPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
