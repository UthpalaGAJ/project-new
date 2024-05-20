import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validation from './LoginValidations';
import homebg from '../images/home.jpg'; //import the background image
import '../App.css';

function Login() {
    const [values, setValues] = useState({
        username: '', // 
        password: '',
    });
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));  
    };

    return (
            <div
                style={{
                    backgroundImage: `url(${homebg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh', 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <div className='bg-white p-3 rounded w-25'>
                    <h2 className="text-center mb-4">Login</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="username"><strong>Username</strong></label> {/* Changed from 'Email' to 'Username' */}
                            <input
                                type="text" 
                                placeholder='Enter Username' 
                                name='username' 
                                onChange={handleInput}
                                className='form-control rounded-0'
                            />
                            {errors.username && <span className='text-danger'>{errors.username}</span>}
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input
                                type="password"
                                placeholder='Enter Password'
                                name='password'
                                onChange={handleInput}
                                className='form-control rounded-0'
                            />
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
                        </div>

                        <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
                        <Link to='/managerHome' className='btn btn-success w-100 rounded-0 mt-2'>Login</Link>
                        <p>You are agree to our terms and policies</p>
                        <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                    </form>
                </div>
            </div>
       
    );
}

export default Login;
