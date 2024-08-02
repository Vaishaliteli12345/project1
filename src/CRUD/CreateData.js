import axios from 'axios';
import React ,{useState}from 'react';
import { useNavigate } from 'react-router-dom';

const CreateData = () => {
    const navigate = useNavigate ();

    const [user,setUser]= useState({
        name:"",
        email:"",
        number:"",
        password:"",

    });

    //const {name,email,number,password}=user;

    const handleChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(user)
        await axios.post("http://localhost:4444/user",user) 
        console.log(user);
        navigate("/get-data");

        alert("Data Sbumitted Successfully.")
    };


  return (
    <div>

<div>
        <div className='container mt-5'>
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

<button className='btn btn-primary  mt-3'>Submit</button>    
                </form>

            </div>

        
    </div>

    </div>
  )
}

export default CreateData;