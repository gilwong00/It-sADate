import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SignIn, SignUp } from '../actions/actions';

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.onSignIn = this.onSignIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
    }
    onSignIn() {
        this.props.SignIn();
    }
    onSignUp() {
       this.props.SignUp();
    }
    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
              <a className="navbar-brand" href="#">Navbar</a>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav pull-right">
                    <li className="nav-item">
                        <a className="nav-link btn" href="#" onClick={this.onSignIn}>Sign In</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn" href="#" onClick={this.onSignUp}>Sign Up</a>
                    </li>
                </ul>
              </div>
            </nav>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        SignIn,
        SignUp
    },dispatch);
}

export default connect(null, mapDispatchToProps)(Header);
