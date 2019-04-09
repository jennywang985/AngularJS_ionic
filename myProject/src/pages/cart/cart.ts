import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.service'
import {LoginPage} from '../login/login'


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  myList = []
  constructor(
    private myService:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');   
  }

  // 每一次进入页面都会执行的一个钩子函数
  ionViewWillEnter(){

    var url = "http://127.0.0.1:8080/cart/list";
    this.myService.sendRequest(url,(result)=>{
      console.log(result)
      // 条件判断
      if(result.code == 300){
        //未登录，跳转到登录页面
        this.navCtrl.push(LoginPage)
      }else if(result.code == 200){
        //result.data 就是购物车列表，保存，到视图中进行渲染
        this.myList = result.data
      }
    })
  }

}
