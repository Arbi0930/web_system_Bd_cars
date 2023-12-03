import { Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../Hooks/UseAuth';
import './Register.css';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const {user, registerUser , isLoading, authError} = useAuth();



    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
return (
<div>

<div className='login-form-container'>
    <Link to="/home">
    <span id="close-login-form" className="fas fa-times"></span>
    </Link>



{!isLoading && 

<form onSubmit={handleLoginSubmit}>

<h3>Бүртгүүлэх</h3>


<input name="name"
onBlur={handleOnBlur} type="name" placeholder="Нэр" className="box" />


<input name="email"

    onBlur={handleOnBlur} type="email" placeholder="И-Мэйл" className="box" />

<input name="password"
    onBlur={handleOnBlur} type="password" placeholder="Нууц үг" className="box" />


<input name="password2"
    onBlur={handleOnBlur} type="password" placeholder="Нууц үгээ давтаж оруулна уу." className="box" />


<input type="submit" value="Бүртгүүлэх" className="btn" />


<p> Бүртгэлтэй бол <Link to="login" href="#">нэвтрэх</Link> </p>


{isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

</form>

}



</div>
</div>
);
};

export default Register;