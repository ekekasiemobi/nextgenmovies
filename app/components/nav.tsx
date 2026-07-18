import Link from "next/link"
import Image from "next/image"

function Nav() {

  return (

    <>  
        <nav className=" flex justify-around items-center bg-[#9C29B2] p-5">
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
        </nav>
        
    </>
  )
}

export default Nav