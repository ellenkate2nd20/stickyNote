var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var Note = createReactClass(
{	
	render: function()
	{
		return(
			<div className="large-4 medium-6 small-12 columns">
				<div className="note" onDoubleClick={this.removeNote.bind(this, this.props.note.id)}>
					<p>{this.props.note.text}</p>
				</div>
			</div>
		);
	},

	removeNote: function(i, j)
	{
		AppActions.removeNote(i);
	}
});

module.exports = Note;