import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignIn from '../components/Login/sign-in';
import SignUp from '../components/Login/sign-up';

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSignUp: false,
            showSignIn: false
        }
        this.onSignInSubmit = this.onSignInSubmit.bind(this);
        this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
    }
    componentDidMount() {
        console.log(this.props.signIn)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.signIn !== this.props.signIn) {

            let { signIn, signUp } = nextProps.signIn;

            if (signIn) {
                this.setState({ showSignIn: signIn, showSignUp: signUp });
            }
            else {
                this.setState({ showSignUp: signUp, showSignIn: signIn });
            }
        }
        else {
            return false;
        }
    }
    onSignInSubmit(event) {
        event.preventDefault();
        console.log('sign in submit');
    }
    onSignUpSubmit(event) {
        event.preventDefault();
        console.log('sign up submit')
    }
    toggleForms() {
        if (this.state.showSignIn) {
            return <SignIn signIn={this.onSignInSubmit}/>
        }
        else if(this.state.showSignUp) {
            return <SignUp signUp={this.onSignUpSubmit}/>
        }
        else {
            return false;
        }
    }
    render() {
        //will need to style this
        return(
            <div className="col-md-12 col-lg-12">
                <h1 className="text-center">Welcome to It's A Date!</h1>

                <div className="col-md-12 col-lg-12">
                    {this.toggleForms()}
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return { signIn: state.registration }
}

export default connect(mapStateToProps)(Welcome);
