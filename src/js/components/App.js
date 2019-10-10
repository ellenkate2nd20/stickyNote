var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var AddNoteForm = require('./AddNoteForm.js');
var NoteList = require('./NoteList.js');

function getAppState()
{
	return {
		notes: AppStore.getNotes()
	}
}

var App = createReactClass(
{	
	getInitialState: function()
	{
		return getAppState();
	},

	_onChange: function()
	{
		this.setState(getAppState());
	},

	componentDidMount: function()
	{
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function()
	{
		AppStore.removeChangeListener(this._onChange);
	},

	render: function()
	{
		console.log(this.state.notes);
		return(
			<div>
				<div className="off-canvas-wrapper">
					<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
						<div className="off-canvas position-left reveal-for-large self-canvas" 
								data-off-canvas data-position="left">
							<div className="row column self-canvas">
								<br/>
								<AddNoteForm />
							</div>
						</div>

						<div className="off-canvas-content text-center" data-off-canvas-content>
							<NoteList notes={this.state.notes}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = App;