var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var AddNoteForm = createReactClass(
{	
	render: function()
	{
		return(
			<div className="container">
				<h5 className="text-center">Add A Note</h5>

				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="large-12 columns">
							<label>Note Text
								<input type="text" ref="text" placeholder="Enter Text..." />
							</label>

							<button className="button">Add</button>
						</div>
					</div>
				</form>
			</div>
		);
	},

	handleSubmit: function(e)
	{
		e.preventDefault();
		var note = 
		{
			text: this.refs.text.value.trim()
		};
		AppActions.addNote(note);
	}
});

module.exports = AddNoteForm;