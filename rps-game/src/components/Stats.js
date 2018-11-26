import React, { Component } from 'react';
import '../styles/Stats.css';

export default class Stats extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {};
    // }

    render() {
        return (
            <div className="stats-container">
                <div className="stats-ceil">
                    <span className="label">Won</span>
                    <span className="value">{ this.props.won }</span>
                </div>
                <div className="stats-ceil">
                    <span className="label">Lost</span>
                    <span className="value">{ this.props.lost }</span>
                </div>
            </div>
        )
    }
}