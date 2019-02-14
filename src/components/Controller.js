import React, { Component } from 'react';

import './../styles/Controller.css';

export default class Controller extends Component {
    constructor (props) {
        super(props);
        this.state = {
            type: this.props.type
        };
    }

    handleClick () {
        this.props.onSelectType(this.state.type);
    }
    
    render () {
        return (<div className="Controller" onClick={this.handleClick.bind(this)}>{ this.state.type }</div>);
    }
}