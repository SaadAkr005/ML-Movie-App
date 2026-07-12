const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export async function getPopularMovies() {
    const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
                accept: "application/json",
            },
        }
    );

    const data = await response.json();

    return data.results;
}