import React, { Component } from 'react'
import { Router, Route, Link, Redirect, hashHistory, browserHistory, IndexRoute } from 'react-router'

import App from '../container/App'
import Home from '../container/Home'
import Individual from '../container/Individual'


export default class Routers extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        }
    }
    static contextTypes = {
        router: React.PropTypes.object
    }
    
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}
                    onLeave={({ params }) => {
                        console.log('离开了登录页 我们去首页');
                    }}>
                </Route>
                <Route path='/home/:userId' component={Home}>
                    <Route path='individual/:customerId' component={Individual} />
                </Route>
            </Router>
        )
    }
}