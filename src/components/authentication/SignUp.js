import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div className="login-card radius elevation-1">
            <p className="logo">MorWork</p>
            <div className="login-fields">
                <p className="large-title">Sign up</p>
                <div className="name-cont">
                    <TextField className="field" variant="outlined" label="First name" />
                    <TextField className="field" variant="outlined" label="Last name" />
                </div>
                <TextField variant="outlined" label="Username" />
                <TextField variant="outlined" label="Email" type="email" />
                <TextField 
                    variant="outlined" 
                    label="Password" 
                    type="password" 
                />
                <TextField 
                    variant="outlined" 
                    label="Confirm password" 
                    type="password" 
                />
                <Button className="auth-btn next" color="primary" variant="contained">Next</Button>
                <p className="no-acc">
                    already have an account?&nbsp;
                    <Link className="link" to="/login">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    )
}