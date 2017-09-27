import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignIn from '../components/Login/sign-in';
import SignUp from '../components/Login/sign-up';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showSignUp: false
        }
        this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
        this.showSignUp = this.showSignUp.bind(this);
        this.showSignIn = this.showSignIn.bind(this);
    }
    onSignInSubmit(event) {
        event.preventDefault();
        console.log('forms hit');
    }
    onSignUpSubmit(event) {
        event.preventDefault();
        console.log('Sign up')
    }
    showSignUp() {
        this.setState({ showSignUp: true })
    }
    showSignIn() {
        this.setState({ showSignUp: false })
    }
    toggleForms() {
        if (this.state.showSignUp === false) {
            return <SignIn submit={this.onSignUpSubmit}/>
        }
        else {
            return <SignUp />
        }
    }
    render() {
        return (
            <div className="col-md-12 col-lg-12">
                <div className="col-md-6 text-center">
                    <button className="btn btn-sm btn-success" onClick={this.showSignIn}>Sign In</button>
                </div>
                <div className="col-md-6 text-center">
                    <button className="btn btn-sm btn-warning" onClick={this.showSignUp}>Sign Up</button>
                </div>
                <div>
                    {this.toggleForms()}
                </div>
            </div>
        )
    }
}

export default Login;
