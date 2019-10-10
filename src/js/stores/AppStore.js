var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var eventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _notes = [];

var AppStore = assign({}, eventEmitter.prototype, 
{	
	// default function
	emitChange: function()
	{
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback)
	{
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback)
	{
		this.removeListener(CHANGE_EVENT, callback);
	},

	// handle events
	getNotes: function()
	{
		return _notes;
	},

	setNotes: function(notes)
	{
		_notes = notes;
	},

	addNote: function(note)
	{
		_notes.push(note);
	},

	removeNote: function(id)
	{
		var index = _notes.findIndex(x => x.id === id);
		_notes.splice(index, 1);
	}
});

AppDispatcher.register(function(payload)
{
	// action from handleViewAction
	var action = payload.action;

	switch(action.actionType)
	{
		case AppConstants.ADD_NOTE:
			console.log('Adding note...');
			
			// add note to store
			AppStore.addNote(action.note);

			// add note to API
			AppAPI.addNote(action.note);

			break;

		case AppConstants.RECEIVE_NOTE:
			console.log('Receiving note...');

			AppStore.setNotes(action.notes);

			break;

		case AppConstants.REMOVE_NOTE:
			console.log('Removing note...');
			
			// remove note to store
			AppStore.removeNote(action.id);

			// remove note to API
			AppAPI.removeNote(action.id);

			break;
	}
	
	AppStore.emitChange();
	return true;
});

module.exports = AppStore;