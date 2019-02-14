import React, { Component } from 'react';

import './../styles/Display.css';

export default class Display extends Component {
    render () {
        return (<div>
            <div className="Display">{ this.props.userSelection }</div>
        </div>);
    }
}