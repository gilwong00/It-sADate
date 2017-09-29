import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignIn from '../Login/sign-in';
import SignUp from '../Login/sign-up';

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSignUp: false,
            showSignIn: false
        }
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
    toggleForms() {
        if (this.state.showSignIn) {
            return <SignIn submit={this.onSignUpSubmit}/>
        }
        else if(this.state.showSignUp) {
            return <SignUp />
        }
        else {
            return false;
        }
    }
    render() {
        //will need to style this
        return(
            <div className="col-md-12 col-lg-12">
                <h1 className="text-center">Welcome To the App</h1>

                <div className="col-md-12 col-lg-12">
                    {this.toggleForms()}
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return { signIn: state.registeration }
}

export default connect(mapStateToProps)(Welcome);