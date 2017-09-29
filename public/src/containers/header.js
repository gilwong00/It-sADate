import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
              <a className="navbar-brand" href="#">Navbar</a>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav pull-right">
                    <li className="nav-item">
                        <a className="nav-link btn" href="#">Sign In</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn" href="#">Sign Up</a>
                    </li>
                </ul>
              </div>
            </nav>
        )
    }
}

export default Header;
