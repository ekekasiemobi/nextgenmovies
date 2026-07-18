'use client'

import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IconType } from "react-icons";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TodoItems } from "../../types";


function InProgress() {
  const [items, setItems] = useState<TodoItems[]>([])

  useEffect(() => {
    fetch('https://dummyjson.com/c/29d4-11d0-4d3a-a0af')
      .then(response => response.json())
      .then(data => setItems(data.todos as TodoItems[]))
  }, [])

  return (
    <>
      <div className='bg-[#F8F8F8] w-full h-screen p-15'>

        <h1 className="text-3xl font-bold">Welcome Kassie; to your dashboard</h1>

        <div className="grid grid-cols-2 gap-5 mt-10">
          {items.filter((items:any) =>items.completed != true).slice(5,30).map((item:any) => { 
              return(
                <div key={item.id} className="bg-[#FFFFFF] p-4 rounded-lg flex gap-3 flex-col shadow">
                  <div className="flex justify-between items-center">
                      {/* <Image className="rounded-full h-9 w-9" src="" alt="User profile" width={48} height={48}/> */}
                      <p className={item.completed === true ? "bg-[#F8C60F] px-1 rounded text-white text-xs" : "bg-[#F8C60F] px-1 rounded text-white text-xs"}>{item.completed === true ? "In Progress" : " In Progress"}</p>

                      <div className="flex gap-5">
                          <MdOutlineEdit  size={15}/>
                          <MdDelete size={15}/>
                      </div>
                  </div>
        
                  <div>
                      <p>{item.todo}</p>
                  </div>
                </div>
              )
          })}
          
        </div>  
      </div>
      
    </>
  )
}

export default InProgress