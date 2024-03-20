import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

export default function LoginPage() {
    const auth = useAuth()
    const [formData, setData] = useState(
        {
            email:"",
            password:""
        }
    )

    const handleChange = (event) => {
        setData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        auth.loginAction(formData)
    }

    return (
        <div className="login-card radius elevation-1">
            <p className="logo">MorWork</p>
            <div className="login-fields">
                <p className="large-title">Login</p>
                <form className="login-fields" onSubmit={handleSubmit}>
                    <TextField variant="outlined" label="Email" type="email" name="email" onChange={handleChange} value={formData.email} />
                    <TextField variant="outlined" label="Password" type="password" name="password" onChange={handleChange} value={formData.password} />
                    <Button 
                        className="auth-btn" 
                        color="primary" 
                        variant="contained" 
                        type="submit"
                    >
                            Login
                    </Button>
                </form>
                
                <p className="no-acc">
                    no account?&nbsp;
                    <Link className="link" to="/sign-up">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}