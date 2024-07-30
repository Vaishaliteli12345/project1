import React, { useState } from 'react'



const Login = () => {
    const [login,setLogin] = useState("login");

    const [user,setUser] = useState({
        name:"",
        email:"",
        number:"",
        password:"",
        confirmpassword:"",
    });

const {name, email , number,password,confirmpassword}  = user;

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDeafault();
        console.log(user)
    }

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-2'></div>

                    {login === "login" && (
                        <div className='col-md-8'>
                                        <div className='card   login_card'>
                                            <center>
                                                <h1>Login</h1>
                                            </center>
                                        <form>
                                            <label>Email :</label>
                                            <input type='email' 
                                            placeholder='Enter Email' 
                                            className='form-control' />

                                            <label>Password :</label>
                                            <input type='Password' 
                                            placeholder='Enter Password' 
                                            className='form-control' />

                                            
                                        <p>         
                                        <span onClick={()=> setLogin("forgotpassword")}>
                                        Forgot Password
                                        </span>
                                        </p>
                                        <button>Login</button>

                                        <p>I dont't have an account ?
                                        <span onClick={()=>setLogin("signup")}>signup</span>
                                        </p>
                                        </form>
                                        </div>

                        </div>

                    )}

    {login === "signup" && (
         <div className='col-md-8'>
                                        <div className='card   login_card'>
                                            <center>
                                                <h1>SignUp</h1>
                                            </center>
                                        <form onSubmit={handleSubmit}>
                                            <label>Name :</label>
                                            <input 
                                            type='text' 
                                            placeholder='Enter Name' 
                                            className='form-control'
                                            name="name"
                                            value={name}
                                            onChange={handleChange}
                                             />

                                            <label>Number :</label>
                                            <input 
                                            type='text' 
                                            placeholder='Enter Number' 
                                            className='form-control'
                                            name="number"
                                            value={number}
                                            onChange={handleChange}

                                            
                                             />

                                            <label>Email :</label>
                                            <input 
                                            type='email' 
                                            placeholder='Enter Email' 
                                            className='form-control'
                                            name="email"
                                          value={email}
                                            onChange={handleChange}

                                            
                                            
                                            />

                                            <label>Password :</label>
                                            <input 
                                            type='Password' 
                                            placeholder='Enter Password' 
                                            className='form-control'
                                            name="password"
                                            value={password}
                                            onChange={handleChange}
                                            
                                            />

                                            <label>Confirm Password :</label>
                                            <input 
                                            type='Password' 
                                            placeholder='Enter Password' 
                                            className='form-control'
                                            name="confirmpassword"
                                            value={confirmpassword}
                                            onChange={handleChange}
                                            
                                            />

                                            
                                            <button>SignUp</button>

                    <p>I dont't have an account ? <span onClick={()=>setLogin("login")}>login</span></p>
                                        </form>
                                        </div>

                        </div>
            )}

                {login === "forgotpassword" &&(
                <div className='col-md-8'>
                <div className='card   login_card'>
                    <center>
                    <h1> <span onClick={()=> setLogin("login")}>
                        <i class="ri-arrow-left-line"></i>
                        {/* <i class="ri-arrow-left-fill"></i> */}
                        </span>Forgot Password</h1>
                    </center>
                <form>
                    <label>Email :</label>
                    <input 
                    type='email' 
                    placeholder='Enter Email' 
                    className='form-control' />


                    <button>Submit</button>

                {/* <p>I dont't have an account ? <span onClick={()=>setLogin("signup")}>signup</span></p> */}
                </form>
                </div>

                </div>
                )}



                <div className='col-md-2'></div>

            </div>

        </div>
    </div>
  );
};

export default Login;