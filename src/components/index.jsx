import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import MainContainer from './main-container/index.jsx'
import InfoContainer from './info-container/index.jsx'
import ApolloClient, { createNetworkInterface }  from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

// Create the client as outlined above
const client = new ApolloClient({
	  networkInterface: createNetworkInterface({ uri: 'http:localhost:8000/graphql2' }),
});


ReactDOM.render(
	<ApolloProvider client={client}>
		<Router history={hashHistory}>
			<Route path='/' component={MainContainer}>
				<Route path='About' component={InfoContainer}/>
				<Route path='skills' component={InfoContainer}/>
			</Route>
		</Router>
	</ApolloProvider>
	, document.getElementById('main'))


/*
ReactDOM.render(<MainContainer />, document.getElementById('main'))
*/