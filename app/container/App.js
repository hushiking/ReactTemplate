import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <div>
                <h1>这是首页</h1>
                <Link to="/home/1">首页</Link>
                <Link to="/home/1/individual/2">个人主页</Link>
                {/* <div>{this.props.children}</div> */}
            </div>
        )
    }
}
module.exports = App