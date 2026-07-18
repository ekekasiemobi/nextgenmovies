import Image from "next/image";
import "../globals.css"
import Card from "./components/card";
import Class from "./components/class";


export default function Home() {
  return (
    <>
      
      <div className="hero-image h-screen relative">
          <Image className="w-full mt-[-13]" src="/Group 1.png" width={1000} height={40} alt="" />

          <div  className="flex justify-between items-center w-[80vw] mx-auto gap-9">

            <div className="w-[50vw] flex flex-col gap-3 items-start">
              <h1 className="text-4xl font-bold righteous">Welcome to Kiddy Rainbow Slime CO.</h1>
              <p className="text-[#9C29B2] poppins">Formulate innovative web-readiness and installed base ideas. Distinctively integrate high-payoff paradigms without next generation systems disseminate holistic e-services through customer directed expertise.</p>
              <button className="self-start px-6 py-2 bg-[#711B85] text-white rounded ">Learn More</button>  
            </div> 

            <div className="grid grid-cols-2 w-[50vw] gap-5">
              
              <Image src="/image 5.png" alt="" width={900} height={20}/>
              <Image src="/image 6.png" alt="" width={900} height={20}/>
              <Image src="/image 7 (1).png" alt="" width={900} height={20}/>
              <Image src="/image 3.png" alt="" width={900} height={20}/>
            </div>  

          </div>         
      </div>
      
      <div className="bg-white ">
        <div className="h-[450] mt-15 flex flex-col justify-center items-center">
            <h1 className="flex justify-center items-center text-3xl text-[#551264] font-bold righteous px-105 text-center">Providing Good Qualities For Your Loving Kids</h1>
            <div className="grid grid-cols-4 w-[80vw] mx-auto gap-5 mt-10">
              <Card icon="/icon4.png" title="Bus Service" description="ubiquitous models rather than parallel initiatives. Seamlessly reinvent success." />

              <Card icon="/icon3.png" title="Sports Training" description="ubiquitous models rather than parallel initiatives. Seamlessly reinvent success." />

              <Card icon="/icon2.png" title="Music Training" description="ubiquitous models rather than parallel initiatives. Seamlessly reinvent success." />

              <Card icon="/icon1.png" title="Best Teachers" description="ubiquitous models rather than parallel initiatives. Seamlessly reinvent success." />
            </div>
            
            
        </div>
      </div>

      <div className="bg-[#9C29B2] ">
        <div className="h-[600]relative">
          <Image className="w-full absolute mt-[-50]" src="/Group 33.png" alt="" width={1000} height={50}/>

          <div className=" w-[80vw] mx-auto h-[600] gap-5 flex items-center">

            <div className="w-[40vw] flex flex-col gap-5 items-start">
              <h1 className="text-white font-bold text-2xl righteous">More About Us</h1>
              <h2 className="text-white font-bold text-3xl righteous">Special Care For Your Children</h2>
              <p className="text-white poppins">Formulate innovative web-readiness and installed base ideas. Distinctively integrate high-payoff paradigms without next generation systems disseminate holistic e-services through customer directed expertise.</p>
              <button className="self-start px-6 py-2 bg-white text-[#711B85] rounded">Learn more</button>
            </div>

            <div className="w-[40vw]">

              <Image className="" src="/image 5.png" alt="" width={400} height={30}/>
              {/* <Image className="pl-40" src="/kid2.png" alt="" width={300} height={30}/>
              <Image className="pl-30" src="/kid3.png" alt="" width={250} height={30}/> */}

            </div>
          </div>
        </div>
  
      </div>

      <div className="bg-[#ECD7F0] ">
        <div className="h-[630] relative">
          <Image className="w-full absolute mt-[-50]" src="/Group 33.png" alt="" width={1000} height={50}/>

          <div className="flex flex-col w-[60vw] mx-auto justify-center items-center h-[630] gap-7">
            <div className="mt-15 flex justify-center text-center flex-col gap-3">
              <h1 className="font-bold text-1xl righteous text-[#9C29B2]">Educational Program</h1>
              <h2 className="text-3xl righteous px-50">Step By Step Systematic Education</h2>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <Class image="/class1.png" title="Online Class" description="Eu turpis egestas pretium aenean pharetra magna ac." link="learn more"/>
              <Class image="/claass2.png" title="Formal Tuition" description="Eu turpis egestas pretium aenean pharetra magna ac." link="learn more"/>
              <Class image="/class1.png" title="Online Class" description="Eu turpis egestas pretium aenean pharetra magna ac." link="learn more"/>
              <Class image="/claass2.png" title="Formal Tuition" description="Eu turpis egestas pretium aenean pharetra magna ac." link="learn more"/>
            </div>
          </div>
        </div>
      </div>
      
      
       
    </>
  );
}
