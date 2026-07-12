import { useEffect, useState } from "react" 
import { getPopularMovies } from "../services/tmdb"

function MovieCards() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function loadMovies() {
            const movieData = await getPopularMovies();
            setMovies(movieData);
        } 

        loadMovies();
    }, []);

    console.log(movies)

    return (
        <div className="grid grid-cols-6 gap-4 p-[2rem] mt-6 overflow-hidden">
            {movies.map((movie: any) => (
                <div key={movie.id} className="transition duration-300 hover:scale-105">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-md"/>
                </div>
            ))}
        </div>
    )
}

export default MovieCards 