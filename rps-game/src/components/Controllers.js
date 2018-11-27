import React, { Component } from 'react';
import Action from './Action';
import '../styles/Controllers.css';

export default class Controllers extends Component {
    constructor (props) {
        super();
        this.state = {
            is_enabled: this.props.is_enabled
        };
    }

    playGame () {
        // @TODO: disable interactions
        //        run computer turn
        //        create computer component
    }

    render() {
        // @TODO: add 'for' cycle
        return (
            <div className="controllers-container">
                <div className="controller">
                    <Action enabled={this.is_enabled} type="rock"/>
                </div>
                <div className="controller">
                    <Action enabled={this.is_enabled} type="scissor"/>
                </div>
                <div className="controller">
                    <Action enabled={this.is_enabled} type="paper"/>
                </div>
            </div>
        )
    }
}