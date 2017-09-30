import React from 'react';

const SignIn = ({ signIn }) => {
    return (
        <div id="login-section-signIn" className="col-md-12 col-lg-12 col-xl-12">
            <form className="container" onSubmit={signIn}>
                <div className="form-group col-md-12 col-lg-12 col-xl-12 text-center">
                    <label className="text-center">Username:</label>
                    <input id="login-username" type="text" className="form-control col-md-4"/>
                </div>
                <div className="col-md-12 col-lg-12 col-xl-12 text-center">
                    <label >Password:</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-md-12 col-lg-12 col-xl-12">
                    <button className="btn btn-sm btn-primary">Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;
