import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
import {DetailPage} from '../detail/detail'

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  myResult = {};

  constructor(
    private myHttp:HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    var url = "http://127.0.0.1:8080/index"
    
    this.myHttp.get(url)
    .subscribe((result)=>{
      console.log(result)
      //将result保存起来，然后到模板中进行调用
      this.myResult = result
    })
  }

  jump(myId){
    // 跳转到详情页
    this.navCtrl.push(DetailPage,{id:myId})
  }

}
