import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <div>
                <h2>home页</h2>
                <h3>{this.props.params.userId}</h3>
                {this.props.children}
            </div>
        )
    }
}
module.exports = Home