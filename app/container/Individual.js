import React from 'react'
import { Link } from 'react-router'

class Individual extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <div>
                <h3>个人主页</h3>
                <h4>{this.props.params.customerId}</h4>
            </div>
        )
    }
}
module.exports = Individual