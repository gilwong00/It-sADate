import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

//importing Components
import Login from '../containers/login';
import Header from '../containers/header';
import Welcome from './Welcome/Welcome';

class App extends Component {
    // componentDidMount() {
    //     console.log(this.props.signIn);
    // }
    // shouldComponentUpdate(nextProps) {
    //     console.log(nextProps)
    //     if (nextProps.signIn !== this.props.signIn) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    // componentDidUpdate(newProps, nextState) {
    //     console.log(this.props.signIn);
    //     let { signIn, signUp } = this.props.signIn;

    //     if(signIn) {
    //         this.props.history
    //     }
    // }
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route path="/App/:key" component={Login}/>
                    
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {signIn: state.registeration}
}

export default connect(mapStateToProps)(App);

