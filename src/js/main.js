var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/AppAPI.js');

AppAPI.getNotes();

ReactDOM.render(
	<App />,
	document.getElementById('app')
);