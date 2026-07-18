
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IconType } from "react-icons";
import Image from "next/image";

async function Done() {
  const response = await fetch(`https://dummyjson.com/c/29d4-11d0-4d3a-a0af`, {
    method: "GET",
  });
  const data = await response.json()
  const items = data.todos

  console.log(data)

  return (
    <>
      <div className='bg-[#F8F8F8] w-full h-screen p-15'>

        <h1 className="text-3xl font-bold">Welcome Kassie; to your dashboard</h1>

        <div className="grid grid-cols-4 gap-5 mt-10">
          {items.filter((items:any) =>items.completed != false).map((item:any) => { 
              return(
                <div key={item.id} className="bg-[#FFFFFF] p-4 rounded-lg flex gap-3 flex-col shadow">
                  <div className="flex justify-between items-center">
                      {/* <Image className="rounded-full h-9 w-9" src="" alt="User profile" width={48} height={48}/> */}
                      <p className={item.completed === true ? "bg-green-700 px-1 rounded text-white text-xs" : "bg-red-700 px-1 rounded text-white text-xs"}>{item.completed === true ? "Completed" : " Todo"}</p>

                      <div className="flex gap-1.5">
                          <MdOutlineEdit size={15}/>
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

export default Done