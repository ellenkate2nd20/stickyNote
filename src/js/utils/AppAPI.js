var AppActions = require('../actions/AppActions');

var firebase = require("firebase");
var config = 
{
	apiKey: "AIzaSyBLo9nWA_qYkuBeqAVnUQSXHT3_lPNkaWg",
    authDomain: "stickynote-384d2.firebaseapp.com",
    databaseURL: "https://stickynote-384d2.firebaseio.com",
    projectId: "stickynote-384d2",
    storageBucket: "stickynote-384d2.appspot.com",
    messagingSenderId: "809549961503"
};

firebase.initializeApp(config);

var fbRef = firebase.database().ref();

module.exports = 
{
	addNote: function(note)
	{
		var noteRef = fbRef.child('notes');
		noteRef.push().set(note);
	},

	getNotes: function()
	{
		var noteRef = fbRef.child('notes');
		noteRef.once('value', function(snapshot)
		{
			var notes = [];
			snapshot.forEach(function(childSnapshot)
			{
				var note = notes.push(
				{
					id: childSnapshot.key,
					text: childSnapshot.val().text
				});

				AppActions.receiveNotes(notes);
			});

			console.log(notes);
		});
	},

	removeNote: function(id)
	{
		var noteRef = fbRef.child('notes/' + id);
		noteRef.remove();
	}
}