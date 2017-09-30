import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //we will connect to the redux store to get a list of candidates
    }
    render() {
        return (
            <div>
                Home Page
            </div>
        )
    }
}

export default HomePage;
