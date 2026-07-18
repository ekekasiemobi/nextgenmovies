import Image from "next/image"
import { homeCard } from "./type"

function Card(props: homeCard) {

  return (
    <>
        <div className="bg-[#F3E9F5] p-6 rounded-lg border-2 border-[#551264]">
            <div className="flex  flex-col gap-2 justify-between items-center">
                <Image className="rounded-full h-9 w-9" src={props.icon} alt="User profile" width={48} height={48}/>

               <h1 className="text-[#551264] font-bold righteous">{props.title}</h1>

               <p className="text-[#934AA2] text-center poppins">{props.description}</p>
            </div>

        </div>
    </>
  )
}

export default Card