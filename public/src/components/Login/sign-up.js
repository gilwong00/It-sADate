import React from 'react';

const SignUp = () => {
    return (
        <div id="login-section-signUp" className="col-md-12 col-lg-12 col-xl-12">
            <form className="container">
                <div className="col-md-12 col-lg-12 form-group">
                    <div className="col-md-12 col-lg-12">
                        <label>Name:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-12 col-lg-12">
                        <label>Email:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-12 col-lg-12">
                        <label>Username:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-12 col-lg-12">
                        <label>Password:</label>
                        <input type="text" className="form-control" />
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
