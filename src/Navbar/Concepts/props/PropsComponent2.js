import React from 'react'

const PropssComponent2 = (props) => {
  return (

    <>
       <div className='col-md-4 mb-4'>
        <div className='card'>

          <img src={props.image} style={{height:"300px",width:"350px"}}/>
          <div className='p-2'>
          <h4>{props.name}</h4>
          <p>{props.email}</p>
          <p>GENDER: {props.gender}</p>
          <p>AGE: {props.age}</p>
          <p>NUMBER: {props.number}</p>
                    </div>
        
        </div>
       </div>
       </>
    
  );
};



export default PropssComponent2;