import './Dependencies/dependencies'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Index from './Components/Pages/index'

const Routes = () => (
	<React.Fragment>
		<BrowserRouter>
			<Switch>
				<Route path="/index" component={Index} />	
			</Switch>
		</BrowserRouter>

	</React.Fragment>
)
export default Routes ;