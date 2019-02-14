import React, { Component } from 'react';
import Controller from './Controller';

import './../styles/Controllers.css';

export default class Header extends Component {
    setType (type) {
        this.props.onUserSelection(type);
    }
    render () {
        return(
            <div className = "Controllers" >
                <Controller type="rock" onSelectType={this.setType.bind(this)} />
                <Controller type="scissors" onSelectType={this.setType.bind(this)} />
                <Controller type="paper" onSelectType={this.setType.bind(this)} />
            </div>
        );
    }
}