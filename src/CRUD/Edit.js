import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditData = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Call useParams as a function to extract id

    const [user, setUser] = useState({
        name: "",
        email: "",
        number: "",
        password: ""
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       
            // Use the correct endpoint for PUT request with id
            await axios.put(`http://localhost:4444/user/${id}`, user);
            alert("Data Submitted Successfully.");
            navigate("/get-data"); // Navigate to another route after successful submission
      
           
        
    };

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        
            const result = await axios.get(`http://localhost:4444/user/${id}`);
            setUser(result.data);
       
        
    };

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input
                        type='text'
                        placeholder='Enter Name'
                        className='form-control'
                        name='name'
                        value={user.name}
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                        type='email'
                        placeholder='Enter Email'
                        className='form-control'
                        name='email'
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Number</label>
                    <input
                        type='number'
                        placeholder='Enter Number'
                        className='form-control'
                        name='number'
                        value={user.number}
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        className='form-control'
                        name='password'
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>

                <button className='btn btn-primary mt-3'>Submit</button>
            </form>
        </div>
    );
};

export default EditData;
