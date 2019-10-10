var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var Note = require('./Note.js');

var NoteList = createReactClass(
{	
	render: function()
	{
		return(
			<div className="grid-x row">
			{
				this.props.notes.map(function(note, index)
				{
					return(
						<Note note={note} key={index} />
					)
				})
			}
			</div>
		);
	},
});

module.exports = NoteList;