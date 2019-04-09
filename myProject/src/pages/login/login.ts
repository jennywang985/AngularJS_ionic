import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import {MyHttpService} from '../../app/utility/service/myhttp.service'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  myName=""
  myPwd=""

  constructor(
    private myService:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    var url = "http://127.0.0.1:8080/user/login";
    // (:- 15:00)
    //获取到用户所输入的用户名和密码
    //将post请求封装在服务中，在此进行复用
    this.myService.sendPostRequest(
      url,
      (result)=>{
        console.log(result)
        if(result.code == 200){
          //返回上一页
          this.navCtrl.pop()
        }else{
          //显示一个通知：登录失败
          this.myService.showToast("登录失败!")
        }
      },
      {uname:this.myName,upwd:this.myPwd},
    )

    /* this.myHttp.post(url,{uname:'dingding',upwd:'123456789'}).subscribe((result)=>{
       console.log(result)
     })*/
  }

}
