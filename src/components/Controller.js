import React, { Component } from 'react';

import './../styles/Controller.css';

export default class Controller extends Component {
    constructor (props) {
        super(props);
        this.state = {};
        this.state.type = this.props.type;
    }
    render() {
        return (<div className="Controller">{this.state.type}</div>);
    }
}