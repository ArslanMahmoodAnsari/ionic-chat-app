import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Inject} from '@angular/core';
export class chatService {

	// username: string = '';
	// message: string = '';
 //  messages: object[] = [];
 //  sub;

  constructor(@Inject(AngularFireDatabase) private db:AngularFireDatabase) {
  	// this.username = this.navParams.get('username');
    // this.sub = this.db.list('/chat').subscribe( data => {
    //     this.messages = data;
    // });
  }
test(username, message){
	console.log('service is running');
      this.db.list('/chat').push({
          username: username,
      message: message
    }).then( () => {

    }).catch ( () => {

    })

}


  // sendMessage() {
  // 	    this.db.list('/chat').push({
  //   	username: this.username,
  //   	message: this.message
  //   }).then( () => {

  //   }).catch ( () => {

  //   })
  //   this.message = '';   
  // }

}
