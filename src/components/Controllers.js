import React, { Component } from 'react';
import Controller from './Controller';

import './../styles/Controllers.css';

export default class Header extends Component {
    render () {
        return(
            <div className = "Controllers" >
                <Controller type="rock" />
                <Controller type="scissors" />
                <Controller type="paper" />
            </div>
        );
    }
}