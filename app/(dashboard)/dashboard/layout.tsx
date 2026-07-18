"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import PopularMovies from "./componets/popular";
import FavouriteMovies from "./componets/favorite";

function Layout({ children }: { children: React.ReactNode }) {

    const pathname = usePathname()

  return (
    <>
        <div className="">

            <div className="grid grid-cols-[15vw_1fr_20vw] bg-white min-h-screen items-start">
                <aside className="self-start h-screen flex gap-9 flex-col p-5 pt-10">
                    <ul className="flex gap-2 flex-col">
                        <li><Link className={pathname === "/dashboard" ? "block w-40 bg-red-700 text-bold px-4 rounded text-white text-sm py-3": "block w-40 hover:bg-gray-200 text-bold px-4 text-sm rounded py-3" } href="/dashboard">Home</Link></li>
                        <li><Link className={pathname === "/dashboard/todo" ? "block w-40 bg-[#9C29B2] text-bold text-sm px-4 rounded text-white py-3": "block w-40 hover:bg-gray-200 text-bold text-sm px-4 rounded py-3" } href="/dashboard/todo">Top Rated</Link></li>
                        <li><Link className={pathname === "/dashboard/inprogress" ? "block w-40 bg-[#9C29B2] text-bold text-sm px-4 rounded text-white py-3": "block w-40 hover:bg-gray-200 text-bold text-sm px-4 rounded py-3" } href="/dashboard/inprogress">Trailers</Link></li>
                        <li><Link className={pathname === "/dashboard/done" ? "block w-40 bg-[#9C29B2] text-bold text-sm px-4 rounded text-white py-3": "block w-40 hover:bg-gray-200 text-bold text-sm px-4 rounded py-3"} href="/dashboard/done">Coming Soon</Link></li>
                    
                    </ul>
                    <ul>
                        {/* <li>Social</li> */}
                        <li><Link className={pathname === "/dashboard/done" ? "block w-40 bg-[#9C29B2] text-bold text-sm  px-4 rounded text-white py-3": "block w-40 hover:bg-gray-200 text-bold text-sm  px-4 rounded py-3"} href="/dashboard/done">Profile</Link></li>
                        <li><Link className={pathname === "/dashboard/done" ? "block w-40 bg-[#9C29B2] text-bold text-sm  px-4 rounded text-white py-3": "block w-40 hover:bg-gray-200 text-bold text-sm  px-4 rounded py-3"} href="/dashboard/done">Friends</Link></li>
                        <li><Link className={pathname === "/dashboard/done" ? "block w-40 bg-[#9C29B2] text-bold text-sm  px-4 rounded text-white py-3": "block w-40 hover:bg-gray-200 text-bold text-sm  px-4 rounded py-3"} href="/dashboard/done">Media</Link></li>
                        
                    </ul>

                    <ul>
                        <li><Link className={pathname === "/dashboard/done" ? "block w-40 bg-[#9C29B2] text-bold text-sm  px-4 rounded text-white py-3": "block w-40 hover:bg-gray-200 text-bold text-sm  px-4 rounded py-3"} href="/dashboard/done">Settings</Link></li>
                        <li><Link className={pathname === "/dashboard/done" ? "block w-40 bg-[#9C29B2] text-bold text-sm  px-4 rounded text-white py-3": "block w-40 hover:bg-gray-200 text-bold text-sm  px-4 rounded py-3"} href="/dashboard/done">Logout</Link></li>
                    </ul>
                </aside>



                <div className="bg-white border-2  border-gray-200 h-screen overflow-aut">
                    <div>{children}</div>
                </div>

                <div className=" self-start overflow-aut mt-5 p-5 font-bold bg-white">
                    <h1>Popular Movies</h1>
                     <PopularMovies />

                     <h1>Favorite Movies</h1>
                     <FavouriteMovies />
                </div>
                
            </div>

        </div>
        
    </>
  );
}

export default Layout;
