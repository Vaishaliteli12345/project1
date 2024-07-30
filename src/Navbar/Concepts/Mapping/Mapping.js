import React from 'react'
import users from '../../../Data/JsData';

const Mapping = () => {
    console.log(users);
  return (
    <div className='container mt-5'>

        {/* {users.map((data)=>{
            return (
               <>
                <h1>{data.name}</h1>
                <p>{data.email}</p>
            
               </>
            )
        })} */}

        <table className='table table-bordered'>
            <tr>
                <th>SR.NO</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Gender</th>
                <th>Age</th>
            </tr>

     {users.map((data,srno) => (
        <tr>
          <td>{srno + 1}</td> {/* SR. NO. */}
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.number}</td>
          <td>{data.gender}</td>
          <td>{data.age}</td>
        </tr>
      ))}

        </table>
    </div>
  );
};

export default Mapping;