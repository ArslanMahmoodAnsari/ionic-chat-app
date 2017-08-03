import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { chatService } from '../../app/chat.service';

 
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {  


	username: string = '';
	message: string = '';
  messages: object[] = [];
  chatSub;

  constructor(private chat:chatService,public db:AngularFireDatabase , public navCtrl: NavController, public navParams: NavParams) {
    	this.username = this.navParams.get('username');
      this.chatSub = this.db.list('/chat').subscribe( data => {
      this.messages = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.db.list('/chat').push({
      specialMessage:true,
      message:`${this.username} has joined the room`
    })
  }
  ionViewWillLeave() {
    this.chatSub.unsubscribe();
    this.db.list('/chat').push({
      specialMessage:true,
      message:`${this.username} has left the room`
    })
  }


  sendMessage() {
    this.chat.test(this.username, this.message);
   }

}
