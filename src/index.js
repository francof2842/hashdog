import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Button from 'antd/lib/button';
import { AuthProvider } from './AuthContext';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Header from './Header';
import ProtectedRoute from './ProtectedRoute';

const initialState = {
  list: false
}

const App = () => (
	<div>
		<Router>
			<AuthProvider>
				<Header />
				<Switch>
          			<ProtectedRoute path="/dashboard" component={Dashboard} />
          			<Route path="/" component={Landing} />
				</Switch>
			</AuthProvider>
		</Router>
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
