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
                        <li><Link className={pathname === "/dashboard/toprated" ? "block w-40 bg-red-700 text-bold text-sm px-4 rounded text-white py-3": "block w-40 hover:bg-gray-200 text-bold text-sm px-4 rounded py-3" } href="/dashboard/toprated">Top Rated</Link></li>
                        <li><Link className={pathname === "/dashboard/trailer" ? "block w-40 bg-red-700 text-bold text-sm px-4 rounded text-white py-3": "block w-40 hover:bg-gray-200 text-bold text-sm px-4 rounded py-3" } href="/dashboard/trailer">Trailers</Link></li>
                        <li><Link className={pathname === "/dashboard/comingsoon" ? "block w-40 bg-red-700 text-bold text-sm px-4 rounded text-white py-3": "block w-40 hover:bg-gray-200 text-bold text-sm px-4 rounded py-3"} href="/dashboard/comingsoon">Coming Soon</Link></li>
                    
                    </ul>
                    <ul className="flex gap-2 flex-col">
                        {/* <li>Social</li> */}
                        <li><Link className={pathname === "/dashboard/action" ? "block w-40 bg-red-700 text-bold text-sm  px-4 rounded text-white py-3": "block w-40 hover:bg-gray-200 text-bold text-sm  px-4 rounded py-3"} href="/dashboard/action">Action</Link></li>
                        <li><Link className={pathname === "/dashboard/romance" ? "block w-40 bg-red-700 text-bold text-sm  px-4 rounded text-white py-3": "block w-40 hover:bg-gray-200 text-bold text-sm  px-4 rounded py-3"} href="/dashboard/romance">Romance</Link></li>
                        <li><Link className={pathname === "/dashboard/comedy" ? "block w-40 bg-red-700 text-bold text-sm  px-4 rounded text-white py-3": "block w-40 hover:bg-gray-200 text-bold text-sm  px-4 rounded py-3"} href="/dashboard/comedy">Comedy</Link></li>
                        <li><Link className={pathname === "/dashboard/horror" ? "block w-40 bg-red-700 text-bold text-sm  px-4 rounded text-white py-3": "block w-40 hover:bg-gray-200 text-bold text-sm  px-4 rounded py-3"} href="/dashboard/horror">Horror</Link></li>
                        
                    </ul>

                    <ul className="flex gap-2 flex-col">
                        <li><Link className={pathname === "/dashboard" ? "block w-40 text-bold text-sm  px-4 rounded text-black py-3": "block w-40 hover:bg-gray-200 text-bold text-sm  px-4 rounded py-3"} href="/dashboard">Settings</Link></li>
                        <li><Link className={pathname === "/dashboard" ? "block w-40 text-bold text-sm  px-4 rounded text-black py-3": "block w-40 hover:bg-gray-200 text-bold text-sm  px-4 rounded py-3"} href="/dashboard">Logout</Link></li>
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
