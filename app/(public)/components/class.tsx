import Image from "next/image"
import { classCard } from "./type"

function Class(props: classCard) {

  return (
    <>
        <div className="bg-white p-9 rounded-lg">
            <div className="flex gap-7 justify-between items-center">

                <Image src={props.image} alt="" width={100} height={50}/>
                <div className="flex flex-col gap-3">
    
                    <h1 className="text-[#551264] font-bold righteous">{props.title}</h1>

                    <p className="text-black text-xs poppins">{props.description}</p>

                    <a href="" className="text-[#934AA2] font-bold text-left text-xs poppins self-start">{props.link}</a>

                </div>
            </div>

        </div>
    </>
  )
}

export default Class