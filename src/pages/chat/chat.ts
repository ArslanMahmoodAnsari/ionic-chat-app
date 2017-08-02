import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {  


	username: string = '';
	message: string = '';
  constructor(public db:AngularFireDatabase , public navCtrl: NavController, public navParams: NavParams) {
  	this.username = this.navParams.get('username');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  sendMessage() {
  	    this.db.list('/chat').push({
    	username: this.username,
    	message: this.message
    })  
  }

}
