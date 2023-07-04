
function Loginsignup() {
    return (
        <>

            <div className="form-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-3 col-md-6">
                            <div className="form-container">
                                <h3 className="title">Register</h3>
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label>User Name</label>
                                        <input type="text" className="form-control" placeholder="User Name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email ID</label>
                                        <input type="email" className="form-control" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input type="password" className="form-control" placeholder="Confirm Password" />
                                    </div>
                                    <h4 className="sub-title">Personal Information</h4>
                                    <div className="form-group">
                                        <label>Phone No.</label>
                                        <input type="text" className="form-control" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="address" className="form-control" placeholder="Address" />
                                    </div>
                                    <div className="check-terms">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="check-label">I agree to the terms</span>
                                    </div>
                                    <span className="signin-link">Already have an account? Click here to <a href="/">Login</a></span>
                                    <button className="btn signup">Create Account</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Loginsignup;