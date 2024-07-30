import React from 'react'
import PropsComponent2 from './PropsComponent2';
import users from '../../../Data/JsData';
import { useState } from 'react';




const PropsComponent1 = () => {
    const [searchFilter, setSearchFilter] = useState("");

    const vaisha = users.filter((user)=>{
        return user.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        user.email.toLowerCase().includes(searchFilter.toLowerCase()) 
    })
    // const filteredData = users.filter(
    //     (user) =>
    //       user.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    //       user.email.toLowerCase().includes(searchFilter.toLowerCase())
    //   );
    const handleSearch = (e)=>{
        setSearchFilter(e.target.value)
      console.log('vaishali');
        
    }
    console.log(vaisha)
    
  return (
    
        <div className='container mt-5'>
            <div>
                <input type="search" onChange={handleSearch} className='form-control mt-5 mb-5' />
                
            </div>
            <div className='row'>
             {vaisha.length>0?(vaisha.map((data)=>{
             return(
             <>
             <PropsComponent2 
             name={data.name}
             email={data.email}
             number={data.number}
             gender={data.gender}
             age={data.age}
             image={data.image}
             />
             </>
                )
             })):(<p>No data found</p>)}

            </div>

        </div>


    
   
  );
};



export default PropsComponent1;