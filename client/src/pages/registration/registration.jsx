import React, { useState } from "react";
import "./registration.css"
import client from "../../api"
import { Link, useNavigate } from "react-router-dom";
import appRoutes from "../../appRoutes";

const Registration = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        rePassword: ""
    });

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    };

    const registration = () => {
        const { name, email, password, rePassword } = user
        if (name && email && password && (password === rePassword)) {
            client.post("auth/registration", user)
                .then(res => {
                    alert(res.data.msg);
                    navigate(appRoutes.login.path);
                }).catch(e => {
                    console.log(e);
                    alert("Registration error");
                });
        } else {
            alert("invalid input")
        }
    }

    return (
        <div className="registration">
            {console.log("User", user)}
            <h1>Registration</h1>
            <input type="text" class="form-control" name="name" value={user.name} placeholder="Enter your name" onChange={handleChange} />
            <input type="text" class="form-control" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange} />
            <input type="password" class="form-control" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange} />
            <input type="password" class="form-control" name="rePassword" value={user.rePassword} placeholder="Enter your password one more time" onChange={handleChange} />
            <div className="button" class="btn btn-primary" onClick={registration}>Register</div>
            <div>or</div>
            <Link to={appRoutes.login.path} replace>Login</Link>
        </div>
    )
}

export default Registration
