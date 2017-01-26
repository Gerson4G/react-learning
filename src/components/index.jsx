import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import MainContainer from './main-container/index.jsx'
import InfoContainer from './info-container/index.jsx'


ReactDOM.render(

	<Router history={hashHistory}>
		<Route path='/' component={MainContainer}/>
		<Route path='/about' />
		<Route path='/skills'/>
	</Router>
	, document.getElementById('main'))


/*
ReactDOM.render(<MainContainer />, document.getElementById('main'))
*/