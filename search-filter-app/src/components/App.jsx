import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Filter from './Filter'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route component={Filter} path="/"/>
            </Switch>
        )
    }
}

export default withRouter(App)