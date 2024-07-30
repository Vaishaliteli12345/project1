import React ,{useState} from 'react'

const UseState = () => {
    const [user,setUser] = useState("vaishali");

    const handleClick = () =>{
        setUser("Vaishu")
    };

  return (
    <div>
        <div className='container'>
            <h1>{user}</h1>
            <button className='btn btn-primary' onClick={handleClick}>Click</button>
            </div>
    </div>
  );
};

export default UseState;