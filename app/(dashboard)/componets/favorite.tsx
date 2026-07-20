"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

export default function FavouriteMovies() {
    const [items, setItems] = useState<any[]>([]);
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        async function fetchMovies() {
            const API_KEY = "50a60b81081e908da671f8520a21259f";
            const BASE_URL = "https://api.themoviedb.org/3";

            try {
                const response = await fetch(`${BASE_URL}/movie/550/recommendations?api_key=${API_KEY}`);
                const data = await response.json();
                setItems(data.results || []);
            } catch (error) {
                console.error("Failed to fetch movies:", error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <aside className="self-start h- mt- p-5 font-bold bg-white">
            {/* <h1 className="text-1xl">Popular Movies</h1> */}

            <div className="grid grid-cols-1 gap-5 mt-">
                {items.slice(0,3).map((item: any) => {
                    const imageSrc = item.poster_path || item.backdrop_path
                        ? `${IMAGE_BASE_URL}${item.poster_path || item.backdrop_path}`
                        : "https://placehold.co/48x48/eeeeee/888888?text=No+Image";

                    return (
                        <div key={item.id} className="border-b border-gray-100 pb-3">
                            <div className="flex gap-3 items-center cursor-pointer">
                                <Image 
                                    className="rounded object-cover h-20 w-14 cursor-pointer" src={imageSrc} alt={item.title || "Movie poster"} width={56} height={80}/>
                                <div>
                                    <p className="text-sm font-semibold">{item.title}</p>
                                    <p className="text-xs text-gray-500 font-normal mt-1">{item.release_date}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                <button className="px-6 self-start w-full py-3 bg-red-700 text-white rounded cursor-pointer">See More</button>
            </div>
        
        </aside>
    );
}