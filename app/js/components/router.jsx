var React = require('react');

import{Router, Route, IndexRoute} from 'react-router';

var Home = require('./home');
var ReactDOM = require('react-dom');


var renderApp = (initialComponent) => {
		ReactDOM.render((
		<Router>
			<Route path='/*' component={initialComponent}>
				<IndexRoute component={initialComponent}/>
			</Route>
		</Router>
		), document.getElementById('app'));
};


var renderNew =() => {
		renderApp((props)=><Home/>);
};


module.exports.start = function(){
		renderNew();
};