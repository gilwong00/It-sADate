import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignIn from '../components/Login/sign-in';
import SignUp from '../components/Login/sign-up';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showSignUp: false,
            showSignIn: false
        }
        this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
    }
    componentDidMount() {
        if (this.props.match.params.key.toLowerCase() === "login") {
            this.setState({ showSignIn: true, showSignUp:false });
        }
        else {
            this.setState({ showSignUp: true, showSignIn: false });
        }
    }
    onSignInSubmit(event) {
        event.preventDefault();
        console.log('forms hit');
    }
    onSignUpSubmit(event) {
        event.preventDefault();
        console.log('Sign up')
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
                <div>
                    {this.toggleForms()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {signIn: state.registeration}
} 

export default connect(mapStateToProps)(Login);
