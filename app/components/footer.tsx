import Image from "next/image" 
import Link from "next/link"

function Footer() {

  return (

    <>
        <div className="bg-[#9C29B2] h-30 pt-20 flex justify-around items-center">
            <Image src="/Group 78.png" alt="" width={50} height={50}/>

            <ul className="flex justify-between gap-5">
                <li><Link className="text-white" href="/">Home</Link></li>
                <li><Link className="text-white" href="/about">About</Link></li>
                <li><Link className="text-white" href="/services">Services</Link></li>
                <li><Link className="text-white" href="/contact">Contact</Link></li>
            </ul>

            <ul>
                <li><Link className="text-white" href="/login">Login</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Footer