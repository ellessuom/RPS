import React, { Component } from 'react';
import Action from './Action';
import '../styles/Controllers.css';

export default class Controllers extends Component {
    render() {
        return (
            <div className="controllers-container">
                <div className="controller">
                    <Action type="rock"/>
                </div>
                <div className="controller">
                    <Action type="scissor"/>
                </div>
                <div className="controller">
                    <Action type="paper"/>
                </div>
            </div>
        )
    }
}