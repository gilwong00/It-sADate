import React from 'react';

const SignUp = ({ signUp }) => {
    return (
        <div id="login-section-signUp" className="col-md-12 col-lg-12 col-xl-12">
            <form className="container" onSubmit={signUp}>
                <div className="col-md-12 col-lg-12 form-group">
                    <div className="col-md-12 col-lg-12">
                        <label>Name:</label>
                        <input id="signUp-Name" type="text" className="form-control" />
                    </div>
                    <div className="col-md-12 col-lg-12">
                        <label>Email:</label>
                        <input id="signUp-Email" type="text" className="form-control" />
                    </div>
                    <div className="col-md-12 col-lg-12">
                        <label>Username:</label>
                        <input id="signUp-UserName" type="text" className="form-control" />
                    </div>
                    <div className="col-md-12 col-lg-12">
                        <label>Password:</label>
                        <input id="signUp-Password" type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-md-12 col-lg-12">
                    <button className="btn btn-sm btn-danger">Sign Up!</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
