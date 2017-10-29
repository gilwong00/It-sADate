import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import axios from 'axios';
import sweetalert from 'sweetalert';

import SignIn from '../components/Login/sign-in';
import SignUp from '../components/Login/sign-up';

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSignUp: false,
            showSignIn: false,
            name: "",
            email: "",
            userName: "",
            password: ""
        }
        this.onSignInSubmit = this.onSignInSubmit.bind(this);
        this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
    }
    componentDidMount() {
        console.log(this.props.signIn)
    }
    componentWillReceiveProps(newProps) {
        if (newProps.signIn !== this.props.signIn) {

            let { signIn, signUp } = newProps.signIn;

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

        let newUser = {
            Name: document.getElementById("signUp-Name").value,
            Email: document.getElementById("signUp-Email").value,
            UserName: document.getElementById("signUp-UserName").value,
            Password: document.getElementById("signUp-Password").value
        }

        //checking to see if any required parameter is empty
        let isValidUser = _.isEmpty(newUser);

        if (!isValidUser) {
            //call sign up api
            axios.post("/api/create", newUser).then(response => {
                if (response.status = 200) {
                    //cache token and then redirect to homepage
                    this.props.history.push("/Home");
                }
                else {
                    //change this to a sweetalert
                    alert("error creating new user");
                }
            });
        }
    }
    toggleForms() {
        if (this.state.showSignIn) {
            return <SignIn signIn={this.onSignInSubmit} />
        }
        else if(this.state.showSignUp) {
            return <SignUp signUp={this.onSignUpSubmit} />
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
