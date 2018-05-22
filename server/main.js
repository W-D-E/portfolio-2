import { Meteor } from 'meteor/meteor';
import {Email} from 'meteor/email';
import './lib/mail';


if (Meteor.isServer){


  Meteor.methods({
 		'sendEmail': function(to, from, name, text){

 			this.unblock();

 			Email.send({
 				to:to,
 				from: from,
 				subject:name,
 				text:text


 			});

 		}


	})

  
}
