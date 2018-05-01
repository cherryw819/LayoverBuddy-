import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';
import { Chat } from '../chat/chat'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

	public user;


  public name;
  public email;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
  	this.user = this.navParams.get('user');
    console.log(this.user);
  	this.name = this.user.name;
  }


  sendMessage(){

    this.navCtrl.push(Chat, {
			toUser: this.user
		});
  }
}
