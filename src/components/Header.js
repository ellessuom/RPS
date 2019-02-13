import React, { Component } from 'react';
import logo from './../logo.svg';

import './../styles/App.css';

export default class Header extends Component {
    render () {
        return(
            <div className = "App" >
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        RPS in React
                </header>
            </div>
        );
    }
}