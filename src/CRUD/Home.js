import axios from 'axios';
import React ,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const CRUD_Home = () => {

    const [users,setUser]= useState([]);

    useEffect(() =>{
        loadUser();

    },[]);

    const loadUser =  async () =>{
       const result =  await axios.get("http://localhost:4444/user");
       setUser(result.data.reverse());
    };

    const deleteUser = async (id) =>{
        await axios.delete(`http://localhost:4444/user/${id}`);
        loadUser();
    }
    // console.log(users)

  return (
    <div className='continer mt-5'>

        <Link to="/post-data">
        <button className='mb-3 btn btn-primary'>
            Add Data</button></Link>

        <table className='table table-bordered table-stripped'>
            <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Action</th>
            </tr>

            {users.map((user,index)=>(
                <tr>
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                
                <td>
                <div  style={{ display: 'flex',justifyContent: 'space-around' }}>
     <Link to={`/edit/${user.id}`}><i class="ri-pencil-fill"></i></Link>
     <Link onClick={()=>deleteUser(user.id)}><i class="ri-delete-bin-6-line"></i></Link>

                 </div>
                </td>
            </tr>

            ))}
            
            
        </table>
    </div>
  );
};

export default CRUD_Home;