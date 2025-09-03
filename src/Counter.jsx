
import React, {useState} from 'react';

const Counter = () => {
  const [count,setcount]=useState(0);
  const handleclick1 = () => {
    setcount(count + 1);
  };
   const handleclick2 = () => {
    setcount(0);
  };
    const handleclick3 = () => {
    setcount(count - 1);
  };
  
  
  return (
  <>
  
 <div className="bg-white shadow-xl rounded-2xl p-8 w-100  m-auto my-[120px] text-center">
  <h2 className='text-5xl font-extrabold text-blue-600 mb-8'>{count}</h2>
  <button onClick={handleclick1} 
  className='m-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow'>increase</button>
  <button 
  onClick={handleclick2} 
  className=' m-2 bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg shadow'> Reset</button>
  <button 
   onClick={handleclick3} 
  className=' m-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow'>decrease</button>
 </div>
  
  
  </>
  )
}

export default Counter