// chứa lib dispatcher + constants, tạo các hàm actions có trong constants 

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = 
{
	addNote: function(note)
	{
		AppDispatcher.handleViewAction(
		{
			actionType: AppConstants.ADD_NOTE,
			note: note
		});
	},

	receiveNotes: function(notes)
	{
		AppDispatcher.handleViewAction(
		{
			actionType: AppConstants.RECEIVE_NOTE,
			notes: notes
		});
	},

	removeNote: function(id)
	{
		AppDispatcher.handleViewAction(
		{
			actionType: AppConstants.REMOVE_NOTE,
			id: id
		});
	}
}

module.exports = AppActions;