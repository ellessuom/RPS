import React, {Component} from 'react';
import '../styles/Action.css'
export default class Action extends Component {
    constructor (props) {
        super();
        this.state = {
            type: this.props.type
        };
    }
    handleClick () {
        // @TODO: km
    }
    render () {
        return (
            <div className="Action">

            </div>
        )
    }
}