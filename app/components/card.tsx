import Image from "next/image"
import { cardProps } from "./types"

function Card(props:cardProps) {
  return (
    <>
        <div className=' bg-[#9C29B2]  p-4 rounded-lg flex gap-3 flex-col'>
            <div className="flex justify-between items-center">
                <Image className="rounded-lg" src={props.profile} alt=""  width={50} height={50}/>
                <div className="flex gap-7">
                    <Image src={props.icon1} alt="" width={20} height={50}/>
                    <Image src={props.icon2} alt="" width={20} height={50}/>
                </div>
            </div>

            <div>
                <p className="text-white">{props.task}</p>
            </div>
        </div>
    </>
  )
}

export default Card