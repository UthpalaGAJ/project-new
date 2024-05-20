import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import validation from './SignupValidations'
import axios from 'axios'


import homebg from '../images/home.jpg'; //import the background image

function Signup() {

    const [values, setValues]= useState({
        name:'',
        email:'',
        username:'',
        password:'',
        username:'',
    })
    const navigate =useNavigate();
    const [errors,setErrors]=useState({})

    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmit=(event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.name === "" && errors.email === "" && errors.username === "" && errors.password === "" && errors.role === ""){
            axios.post('http://localhost:8081/signup',values)
            .then(res => {
                navigate('/')
            })
            .catch(err =>console.log(err));
        }
      
    }

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
                <h2 className="text-center mb-4">Registration Form</h2> 
                <form action="" onSubmit={handleSubmit}>

                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input 
                            type="text" 
                            placeholder='Enter Name' 
                            name='name' 
                            onChange={handleInput} 
                            className='form-control rounded-0'
                        />
                        {errors.name && <span className='text-danger'>{errors.name}</span> }
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input 
                            type="email" 
                            placeholder='Enter Email' 
                            name='email' 
                            onChange={handleInput} 
                            className='form-control rounded-0'
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span> }
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="username"><strong>Username</strong></label>
                        <input 
                            type="text" 
                            placeholder='Enter Username' 
                            name='username' 
                            onChange={handleInput} 
                            className='form-control rounded-0'
                        />
                        {errors.username && <span className='text-danger'>{errors.username}</span> }
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
                        {errors.password && <span className='text-danger'>{errors.password}</span> }
                    </div>
                    <div className='mb-3'>
                    <label htmlFor="role"><strong>Role</strong></label>
                    <select
                     name='role'
                     value={values.role}
                     onChange={handleInput}
                    className='form-control rounded-0'
                    
                                >
                     
                     <option value="customer">Customer</option>
                    <option value="manager">Manager</option>
                    <option value="stock keeper">Stock Keeper</option>
                     <option value="cashier">Cashier</option>
            </select>
            {errors.role && <span className='text-danger'>{errors.role}</span>}
          </div>

                    <button type='submit' className='btn btn-success w-100 rounded-0'>Signup</button>

                    <p> </p>

                    <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 tex-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
  
    )
}

export default Signup;
