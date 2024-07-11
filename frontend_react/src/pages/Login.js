import React from 'react';
import '../pages_css/login.css';
import {FaRegUser} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';

const Login = () => { // komponent funkcyjny
    return (
        
        <div className='background-container'>
            <div className='form-container'>
                <form action=''>
                    <h1>Sign in</h1> 
                        <div className='input-box'>
                            <input type='text' placeholder='Username' required/>
                            <FaRegUser className='icon'/>
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='Password' required/>
                            <MdLockOutline className='icon'/>
                        </div>
                        <div className='remember_and_forgot'>
                            <label><input type='checkbox'/>Remember me</label>
                            <a href='#'>Forgot password?</a>
                        </div>
                        <div className='button-submit'>
                            <button type='submit'>Login</button>
                        </div>
                        <div className='register'>
                            <p>Don't have an account? <a href='#'>Register</a></p>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default Login;