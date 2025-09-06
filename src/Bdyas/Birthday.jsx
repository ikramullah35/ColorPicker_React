
import React, { useState } from "react";
import Singlebdays from "./Singlebdays";
import bday from "./bday";  
import { FaTrash } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";

const Birthday = () => {
  const [data,setdata]=useState(bday)
  const removeBirtday=(id)=>{
    let newData=data.filter((item, index)=>{
      return item.id  !==   id 
    })
    setdata(newData)
  }
  return (
    <div className="container mx-auto w-[30%] sm:max-w-md lg:max-w-5xl p-6 my-6 shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center">
        {data.length} birthdays today
      </h1>

      {data.map((item) => (
        <Singlebdays  remove={removeBirtday} {...item} key={item.id} />
      ))}
        <button onClick={data.length == 0 ? () => setdata(bday) : ()=> setdata([]) } className={ `${data.length == 0 ? "bg-green-500" : "bg-red-500"} text-white flex items-center  justify-center  font-medium p-2 rounded-full w-full  cursor-pointer me-3 hover:underline
          `}>
              {data.length == 0 ? <LuRefreshCw /> :<FaTrash />}
             
          
      
            </button>
    </div>
  );
};

export default Birthday;
