
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IconType } from "react-icons";
import Image from "next/image";

async function Dashboard() {
  const API_KEY = "50a60b81081e908da671f8520a21259f";
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`, {
    method: "GET",
  });
  const data = await response.json();
  const items = data.results;

  return (
    <>
      <div className='bg-white w-full h-auto p-5 pt-10'>
        <div className="flex justify-between items-center">
          <ul className="flex gap-5">
            <li><a className="text-sm" href="">TV Series</a></li>
            <li><a className="text-sm font-bold" href="">Movies</a></li>
            <li><a className="text-sm" href="">Animes</a></li>
          </ul>
          <form action="">
            <input className="w-full border-3 border-gray-200 px-6 py-2 rounded text-xs" type="search" placeholder="Search a movie" />
          </form>
        </div>
        

        {/* <h1 className="text-3xl font-bold">Welcome Kassie; to your dashboard</h1> */}
        <div className="grid grid-cols-1 gap-3 mt-5">
          {items.slice(5,6).map((item:any) => {
              const imageSrc = item.poster_path || item.backdrop_path
                ? `${IMAGE_BASE_URL}${item.poster_path || item.backdrop_path}`
                : "https://placehold.co/48x48/eeeeee/888888?text=No+Image";

              return(
                <div key={item.id} className="">
                  <div className="h-80 w-full overflow-hidden rounded-lg">
                    <Image className="h-full w-full object-cover object-center" src={imageSrc} alt={item.title || "Movie poster"} width={308} height={193} />
                    
                  </div>
        
                  <div className="flex justify-between">
                    <div>
                      <p className="pt-3 font-bold text-sm">{item.title}</p>
                      <p className="text-sm">{item.release_date}</p>
                    </div>

                    <div>
                      <p className="pt-3 text-sm">{item.vote_average}</p>
                      {/* <p className="pt-3 text-sm">{item.vote_count}</p> */}
                    </div>
              
                  </div>
                </div>
              )
          })}
          
        </div>
        <h1 className="mt-10 text-1xl font-bold">Trending Movies</h1>
        <div className="grid grid-cols-4 gap-3 mt-5">
          {items.slice(0,4).map((item:any) => {
              const imageSrc = item.poster_path || item.backdrop_path
                ? `${IMAGE_BASE_URL}${item.poster_path || item.backdrop_path}`
                : "https://placehold.co/48x48/eeeeee/888888?text=No+Image";

              return(
                <div key={item.id} className="">
                  <div className="flex justify-between items-center">
                    <Image className=" h-50 w-full rounded-lg object-cover object-center" src={imageSrc} alt={item.title || "Movie poster"} width={308} height={50} />
                    
                  </div>
        
                  <div className="flex justify-between">
                    <div>
                      <p className="pt-3 font-bold text-sm">{item.title}</p>
                      <p className="text-sm">{item.release_date}</p>
                    </div>

                    <div>
                      <p className="pt-3 text-sm">{item.vote_average}</p>
                      {/* <p className="pt-3 text-sm">{item.vote_count}</p> */}
                    </div>
              
                  </div>
                </div>
              )
          })}
          
        </div>
        <h1 className="mt-10 text-1xl font-bold">Recommended Movies</h1>
        <div className="grid grid-cols-4 gap-3 mt-5">
          {items.slice(10,14).map((item:any) => {
              const imageSrc = item.poster_path || item.backdrop_path
                ? `${IMAGE_BASE_URL}${item.poster_path || item.backdrop_path}`
                : "https://placehold.co/48x48/eeeeee/888888?text=No+Image";

              return(
                <div key={item.id} className="">
                  <div className="flex justify-between items-center">
                    <Image className=" h-50 w-full rounded-lg object-cover object-center" src={imageSrc} alt={item.title || "Movie poster"} width={308} height={50} />
                    
                  </div>
        
                  <div className="flex justify-between">
                    <div>
                      <p className="pt-3 font-bold text-sm">{item.title}</p>
                      <p className="text-sm">{item.release_date}</p>
                    </div>

                    <div>
                      <p className="pt-3 text-sm">{item.vote_average}</p>
                      {/* <p className="pt-3 text-sm">{item.vote_count}</p> */}
                    </div>
              
                  </div>
                </div>
              )
          })}
          
        </div>  
      </div>
      
    </>
  )
}

export default Dashboard