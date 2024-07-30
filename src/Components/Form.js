import React, { useState } from 'react'

const Form = () => {
    const [user,setUser]= useState({
        name:"",
        email:"",
        number:"",
        password:""

    });

    const {name,email,number,password}=user;

    const handleChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }

  return (
    <div>
        <div className='container'>
        <form onSubmit={handleSubmit}>
        <label>Name</label>
         <input type='text' 
         placeholder='Enter Name'
         className='form-control'
         name='name'
         value={user.name}
         onChange={handleChange}
         />

        <label>Email</label>
        <input type='email'
        placeholder='Enter Email'
        className='form-control'
        name='email'
        value={user.email}
        onChange={handleChange}


        />

        <label>Number</label>
        <input type='number'
        placeholder='Enter Number'
        className='form-control'
        name='number'
        value={user.number}
        onChange={handleChange}

         
         />

        <label>Password</label>
        <input type='password'
        placeholder='Enter Password'
        className='form-control'
        name='password'
        value={user.password}
        onChange={handleChange}

        
        />

<button className='btn btn-primary mt-3'>Submit</button>    
                </form>

            </div>

        
    </div>
  )
}

export default Form;