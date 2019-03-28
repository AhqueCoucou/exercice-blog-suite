import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor() {
		var config = {
		    apiKey: "AIzaSyDy6c1iSmpIAOG_3JtTly8nDSid5ItwmnM",
		    authDomain: "blog-83a26.firebaseapp.com",
		    databaseURL: "https://blog-83a26.firebaseio.com",
		    projectId: "blog-83a26",
		    storageBucket: "blog-83a26.appspot.com",
		    messagingSenderId: "861294991158"
  		};
  
  		firebase.initializeApp(config);
	}
}
